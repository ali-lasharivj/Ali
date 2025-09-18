# ALI-MD WhatsApp Bot Project

## Overview

ALI-MD is a sophisticated multi-device WhatsApp bot built with Node.js and Baileys library. The bot is designed to enhance WhatsApp communication experience with a comprehensive set of features including AI integration, media processing, group management, content downloading, and advanced automation capabilities. The project includes both the main ALI-MD bot system and a secondary KAISEN-MD variant, providing flexibility in deployment options.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Core Bot Framework
- **Primary Technology**: Node.js with @whiskeysockets/baileys for WhatsApp Web API integration
- **Session Management**: File-based session storage with JSON credentials and state persistence
- **Message Processing**: Event-driven architecture with command pattern implementation
- **Plugin System**: Modular plugin architecture allowing easy feature extension and customization

### Database Layer
- **Database Abstraction**: Sequelize ORM with dual database support
- **Storage Options**: SQLite for local development, PostgreSQL for production deployment
- **Data Models**: Separate models for anti-delete functionality, contact management, message storage, and group metadata
- **Caching Strategy**: In-memory caching for group metadata and frequent data access patterns

### Command System
- **Command Registration**: Centralized command management through lib/cmds.js
- **Pattern Matching**: Regular expression-based command pattern recognition
- **Permission Control**: Role-based access control with owner, admin, and sudo user hierarchies
- **Feature Categories**: Commands organized into categories (AI, anime, download, fun, group, logo, main, owner, search, system, tools)

### Media Processing Pipeline
- **Format Support**: Comprehensive media handling for images, videos, audio, stickers, and documents
- **Conversion Engine**: FFmpeg integration for media format conversion and processing
- **Image Enhancement**: AI-powered image upscaling and enhancement capabilities
- **Sticker Creation**: Advanced sticker generation from images and videos with metadata support

### AI Integration Layer
- **Multi-Provider Support**: Integration with Stable Diffusion, Gemini, and other AI services
- **Image Generation**: Text-to-image generation with customizable parameters
- **Chat Bot**: Conversational AI with context awareness and personality configuration
- **Content Analysis**: Automated content moderation and analysis capabilities

### Group Management System
- **Administrative Tools**: Comprehensive group administration with promote/demote, kick/ban functionality
- **Anti-Spam Protection**: Multi-layered protection against links, bad words, and unwanted content
- **Auto-Moderation**: Configurable automatic moderation with customizable rules and responses
- **Member Analytics**: User activity tracking and inactive member identification

### Configuration Management
- **Environment Variables**: Comprehensive configuration through environment variables and config files
- **Feature Toggles**: Granular control over bot features and behaviors
- **Multi-Mode Operation**: Support for public, private, and inbox-only operation modes
- **Dynamic Settings**: Runtime configuration updates without restart requirements

### Security Framework
- **Access Control**: Multi-tier permission system with owner, sudo, and admin roles
- **Anti-Delete Protection**: Message recovery and notification system for deleted content
- **Privacy Controls**: Configurable privacy settings and data handling policies
- **Rate Limiting**: Built-in protection against spam and abuse

## External Dependencies

### Core WhatsApp Integration
- **@whiskeysockets/baileys**: Primary WhatsApp Web API client library
- **qrcode-terminal**: QR code generation for initial authentication setup

### Database and Storage
- **Sequelize**: Object-Relational Mapping for database operations
- **SQLite3**: Local database storage for development environments  
- **PostgreSQL (pg)**: Production database support for scalable deployments

### Media Processing
- **FFmpeg**: Comprehensive media processing and format conversion
- **Sharp**: High-performance image processing and manipulation
- **Fluent-FFmpeg**: Node.js wrapper for FFmpeg operations
- **Jimp**: JavaScript image manipulation library
- **wa-sticker-formatter**: WhatsApp sticker creation and formatting

### AI and External APIs
- **Axios**: HTTP client for external API communications
- **@vitalets/google-translate-api**: Translation services integration
- **Various AI APIs**: Stable Diffusion, Gemini, and other AI service providers

### Utility Libraries
- **Moment-timezone**: Date and time handling with timezone support
- **Cheerio**: HTML parsing and web scraping capabilities
- **AdmZip**: Archive creation and extraction functionality
- **Mime-types**: MIME type detection and handling
- **File-type**: File format detection and validation

### Development and Deployment
- **PM2**: Process management for production deployments
- **Express**: Web server framework for health checks and webhooks
- **Dotenv**: Environment variable management
- **JavaScript-obfuscator**: Code protection and obfuscation tools

### Communication and Messaging
- **Form-data**: Multipart form data handling for file uploads
- **Node-fetch**: Modern fetch API implementation for Node.js
- **CORS**: Cross-origin resource sharing middleware
- **Body-parser**: Request body parsing middleware