// Add this function before the ConnectAliconnToWA function

async function AntiDelete(Aliconn, updates) {
    try {
        for (const update of updates) {
            if (update.update.message === null) {
                // Get the deleted message from our saved messages
                const deletedMessage = loadMessage(update.key.id);

                if (!deletedMessage) return;

                const chatId = update.key.remoteJid;
                const isGroup = chatId.endsWith('@g.us');
                const deleterId = update.key.fromMe ? Aliconn.user.id : update.key.participant || update.key.remoteJid;
                const deleterName = deleterId === Aliconn.user.id ? 'Bot' : (deletedMessage.pushName || deleterId.split('@')[0]);

                // Get message content
                const messageType = Object.keys(deletedMessage.message || {})[0];
                let messageContent = '';
                let mediaBuffer = null;

                if (messageType === 'conversation') {
                    messageContent = deletedMessage.message.conversation;
                } else if (messageType === 'extendedTextMessage') {
                    messageContent = deletedMessage.message.extendedTextMessage.text;
                } else if (messageType === 'imageMessage') {
                    messageContent = deletedMessage.message.imageMessage.caption || '📸 Image';
                    try {
                        mediaBuffer = await downloadMediaMessage(deletedMessage);
                    } catch (err) {
                        console.log('Failed to download deleted image:', err);
                    }
                } else if (messageType === 'videoMessage') {
                    messageContent = deletedMessage.message.videoMessage.caption || '🎥 Video';
                    try {
                        mediaBuffer = await downloadMediaMessage(deletedMessage);
                    } catch (err) {
                        console.log('Failed to download deleted video:', err);
                    }
                } else if (messageType === 'audioMessage') {
                    messageContent = '🎵 Audio Message';
                    try {
                        mediaBuffer = await downloadMediaMessage(deletedMessage);
                    } catch (err) {
                        console.log('Failed to download deleted audio:', err);
                    }
                } else if (messageType === 'stickerMessage') {
                    messageContent = '🌟 Sticker';
                    try {
                        mediaBuffer = await downloadMediaMessage(deletedMessage);
                    } catch (err) {
                        console.log('Failed to download deleted sticker:', err);
                    }
                } else if (messageType === 'documentMessage') {
                    const fileName = deletedMessage.message.documentMessage.fileName || 'Document';
                    messageContent = `📄 ${fileName}`;
                    try {
                        mediaBuffer = await downloadMediaMessage(deletedMessage);
                    } catch (err) {
                        console.log('Failed to download deleted document:', err);
                    }
                } else {
                    messageContent = `${messageType.replace('Message', '')} message`;
                }

                // Format timestamp
                const timestamp = new Date(deletedMessage.messageTimestamp * 1000).toLocaleString('en-US', {
                    timeZone: tz || 'UTC',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });

                // Create anti-delete message
                const antiDeleteText = `*🗑️ ANTI-DELETE DETECTED 🗑️*

*╭─────────────────────┄┈┈*
*│👤 Deleter:* ${deleterName}
*│📱 Number:* ${deleterId.split('@')[0]}
*│⏰ Original Time:* ${timestamp}
*│💬 ${isGroup ? 'Group' : 'Chat'}:* ${isGroup ? groupName || 'Unknown Group' : 'Private Chat'}
*│📝 Message Type:* ${messageType.replace('Message', '')}
*╰─────────────────────┄┈┈*

*📄 Deleted Content:*
${messageContent || '_No text content_'}

*⚠️ This message was deleted but captured by ALI MD*`;

                // Send to the same chat where message was deleted
                if (mediaBuffer && ['imageMessage', 'videoMessage', 'stickerMessage'].includes(messageType)) {
                    if (messageType === 'imageMessage') {
                        await Aliconn.sendMessage(chatId, {
                            image: mediaBuffer,
                            caption: antiDeleteText,
                            contextInfo: {
                                forwardingScore: 999,
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterName: config.BOT_NAME,
                                    newsletterJid: "120363318387454868@newsletter",
                                }
                            }
                        });
                    } else if (messageType === 'videoMessage') {
                        await Aliconn.sendMessage(chatId, {
                            video: mediaBuffer,
                            caption: antiDeleteText,
                            contextInfo: {
                                forwardingScore: 999,
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterName: config.BOT_NAME,
                                    newsletterJid: "120363318387454868@newsletter",
                                }
                            }
                        });
                    } else if (messageType === 'stickerMessage') {
                        await Aliconn.sendMessage(chatId, {
                            text: antiDeleteText,
                            contextInfo: {
                                forwardingScore: 999,
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterName: config.BOT_NAME,
                                    newsletterJid: "120363318387454868@newsletter",
                                }
                            }
                        });
                        // Send sticker separately
                        await Aliconn.sendMessage(chatId, {
                            sticker: mediaBuffer
                        });
                    }
                } else if (mediaBuffer && ['audioMessage', 'documentMessage'].includes(messageType)) {
                    await Aliconn.sendMessage(chatId, {
                        text: antiDeleteText,
                        contextInfo: {
                            forwardingScore: 999,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterName: config.BOT_NAME,
                                newsletterJid: "120363318387454868@newsletter",
                            }
                        }
                    });

                    // Send media separately
                    if (messageType === 'audioMessage') {
                        await Aliconn.sendMessage(chatId, {
                            audio: mediaBuffer,
                            mimetype: 'audio/mpeg'
                        });
                    } else if (messageType === 'documentMessage') {
                        const fileName = deletedMessage.message.documentMessage.fileName || 'deleted_document';
                        await Aliconn.sendMessage(chatId, {
                            document: mediaBuffer,
                            fileName: fileName,
                            mimetype: deletedMessage.message.documentMessage.mimetype || 'application/octet-stream'
                        });
                    }
                } else {
                    // Text message or failed media
                    await Aliconn.sendMessage(chatId, {
                        text: antiDeleteText,
                        contextInfo: {
                            forwardingScore: 999,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterName: config.BOT_NAME,
                                newsletterJid: "120363318387454868@newsletter",
                            }
                        }
                    });
                }

                // Send notification to bot owner
                const ownerNumbers = config.OWNER_NUMBER.split(',');
                for (const owner of ownerNumbers) {
                    const ownerJid = owner.trim() + '@s.whatsapp.net';
                    try {
                        const ownerNotification = `*🚨 ANTI-DELETE ALERT 🚨*

*A message was deleted and captured:*

*👤 Deleter:* ${deleterName}
*📱 Number:* +${deleterId.split('@')[0]}
*🔗 Chat:* ${isGroup ? `Group - ${groupName || 'Unknown'}` : 'Private Chat'}
*⏰ Time:* ${timestamp}
*📝 Type:* ${messageType.replace('Message', '')}

*Content:* ${messageContent || '_Media/No text_'}

*Chat ID:* ${chatId}`;

                        await Aliconn.sendMessage(ownerJid, {
                            text: ownerNotification,
                            contextInfo: {
                                forwardingScore: 999,
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterName: config.BOT_NAME,
                                    newsletterJid: "120363318387454868@newsletter",
                                }
                            }
                        });
                    } catch (err) {
                        console.log(`Failed to send anti-delete notification to owner ${owner}:`, err);
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error in AntiDelete function:', error);
    }
}

// Also add this enhanced message saving function to ensure all messages are properly stored
const originalSaveMessage = saveMessage;

function enhancedSaveMessage(message) {
    try {
        // Save the original message
        originalSaveMessage(message);

        // Also save with message ID as key for easy retrieval
        if (message.key && message.key.id) {
            const messageData = JSON.stringify(message, null, 2);
            fs.writeFileSync(path.join(__dirname, 'data', 'messages', `${message.key.id}.json`), messageData);
        }
    } catch (error) {
        console.error('Error saving message for anti-delete:', error);
    }
}

// Create messages directory if it doesn't exist
const messagesDir = path.join(__dirname, 'data', 'messages');
if (!fs.existsSync(messagesDir)) {
    fs.mkdirSync(messagesDir, { recursive: true });
}

// Enhanced loadMessage function
function enhancedLoadMessage(messageId) {
    try {
        const messagePath = path.join(__dirname, 'data', 'messages', `${messageId}.json`);
        if (fs.existsSync(messagePath)) {
            const messageData = fs.readFileSync(messagePath, 'utf8');
            return JSON.parse(messageData);
        }
        // Fallback to original loadMessage
        return loadMessage(messageId);
    } catch (error) {
        console.error('Error loading message for anti-delete:', error);
        return null;
    }
}