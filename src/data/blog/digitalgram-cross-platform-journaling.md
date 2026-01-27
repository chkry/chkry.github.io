---
title: "DigitalGram: A Cross-Platform Journaling App for macOS and Android"
description: "Exploring DigitalGram - a privacy-focused daily journaling application built natively for macOS and Android with Material Design, markdown support, and local-first storage."
pubDatetime: 2026-01-21T10:00:00+08:00
tags:
  - macos
  - android
  - open-source
  - productivity
---

## Table of Contents

## Introduction

You know how every app these days wants you to sign up for a subscription and sync your data to some cloud server? I got tired of that. So I built DigitalGram - a simple journaling app that keeps your thoughts exactly where they should be: on your device.

The idea started when I wanted a quick-access journal that lived in my macOS menu bar. Something I could pop open, jot down thoughts, and close without interrupting my flow. Then I extended it to Android with a beautiful beige aesthetic (inspired by Daygram) for when I'm away from my desk. Both versions follow the same principle: **your data stays local, no tracking, no subscriptions, just instant access to your journal**.

## DigitalGram for macOS

### Overview

DigitalGram for macOS lives in your menu bar, providing instant access to your daily journal. Built with SwiftUI and Swift, it embraces native macOS design patterns while offering powerful features for daily reflection.

### Key Features

**Menu Bar Integration**
- Always accessible from your macOS menu bar
- Quick popover interface for fast journaling
- Minimal footprint - stays out of your way until needed

**Markdown Editor with Live Preview**
- Full markdown syntax support (headers, bold, italic, lists)
- Interactive task lists with clickable checkboxes (`- [ ]` and `- [x]`)
- Image embedding with resizable preview
- Live preview mode to see formatted content

**Smart Navigation**
- Calendar-based navigation with date picker
- Quick jump to previous/next days
- List view to see all entries at once
- Sorted chronologically (newest first)

**SQLite Storage**
- Efficient local database storage
- Configurable storage location for database and images
- Automatic database migration when changing storage paths
- Schema: Entry ID, Date, Timestamp, Markdown Content

**Export Capabilities**
- Export to Excel (.xlsx) format
- CSV export for data portability
- Includes all journal entries with timestamps

**Auto-Save**
- Automatically saves as you type
- Never lose your thoughts
- One entry per day with full timestamp tracking

### System Requirements

- macOS 12.0 (Monterey) or later
- Compatible with macOS 13 Ventura, 14 Sonoma, 15 Sequoia
- Future-ready for macOS 16 Tahoe

### Getting Started

Head over to the [DigitalGram releases page](https://github.com/chkry/DigitalGram/releases) and download the latest DMG file. Installation is straightforward - just drag the app to your Applications folder.

One heads up: since the app isn't signed with an Apple Developer certificate, you'll need to right-click and select "Open" the first time you launch it. macOS will show a security warning, but after that initial confirmation, it'll open normally.

### Under the Hood

For the curious folks: it's built with SwiftUI for the interface, uses SQLite for local storage, and follows the MVVM pattern. Nothing fancy, just solid foundations that make it reliable and fast.

## DigitalGram for Android

### Overview

The Android version takes everything I loved about the macOS app and adapts it for mobile. I went with a warm beige color scheme that's easy on the eyes, especially for late-night journaling sessions. It's built natively in Kotlin with Material Design 3, so it feels right at home on Android.

### Key Features

**Beautiful Beige Theme**
- Custom color scheme matching Daygram aesthetic
- Background: #F5F1E8 (warm beige)
- Accent: #B85450 (red)
- Black bordered cards with 2dp borders
- Striped date boxes for visual interest

**Privacy-Focused**
- All data stored locally using Room database
- No internet permissions required
- No tracking or analytics
- Your journal stays on your device

**Date-Based Organization**
- Timeline view with RecyclerView
- Chronological entry display
- Quick access to any date
- Material Design 3 date pickers

**Rich Text Editing**
- Create and edit diary entries
- Full-screen editor with bordered frame
- Autosave functionality
- Delete entries from editor menu

### Getting the Android Version

Grab the latest APK from the [DigitalGramAndroid releases page](https://github.com/chkry/DigitalGramAndroid/releases). Works on Android 8.0 and up. Since it's not on the Play Store, you'll need to enable "Install from Unknown Sources" in your Android settings.

Both apps use a similar database structure under the hood, which means I might be able to add device sync in the future without breaking everything. That's the plan, anyway!

## How I Use It (And How You Might Too)

**Morning Reflections**: I keep DigitalGram in my macOS menu bar and start each day by jotting down intentions and goals. The markdown support means I can use task lists (`- [ ]`) and check things off as the day progresses.

**Travel Journaling**: On flights or in areas with spotty internet, the Android version is perfect. Everything works offline, and you don't have to worry about syncing issues or data limits.

**Private Thoughts**: This one's important to me - your entries never leave your device. No company is scanning your journal for ads, no AI training on your personal thoughts. It's just you and your words.

**Quick Capture**: The menu bar access means I can capture ideas in seconds without opening a full app or getting distracted by notifications.

## Download & Source Code

Both apps are completely free and open source:

**macOS Version**  
📦 [Download from Releases](https://github.com/chkry/DigitalGram/releases) - Current version: 1.30.0  
💻 [View Source Code](https://github.com/chkry/DigitalGram)

**Android Version**  
📦 [Download APK from Releases](https://github.com/chkry/DigitalGramAndroid/releases)  
💻 [View Source Code](https://github.com/chkry/DigitalGramAndroid)

Feel free to fork, modify, or contribute! I built these apps for myself first, but if they're useful to you, that's awesome. Pull requests are welcome.

## What's Next?

I've got some ideas brewing for future versions:

- **Local Sync**: P2P sync over your local network so entries can move between your Mac and Android without touching the cloud
- **Optional Encrypted Backup**: For those who want an extra safety net, an encrypted cloud backup option (still thinking through the best approach here)
- **Full-Text Search**: As my journal grows, I need better search. It's coming.
- **Voice Notes**: Sometimes typing isn't convenient - audio attachments would be nice
- **Tags**: Simple tagging system for organizing entries by theme or topic

No timelines on these - I build features when I need them myself, which keeps the app focused and bloat-free.

## Wrapping Up

I built DigitalGram because I wanted a journaling app that didn't feel like a chore to use. No accounts, no syncing delays, no wondering who has access to my data. Just a simple tool that stays out of the way until I need it.

If you're tired of subscription-based everything and want something that just works, give it a try. And if you're a developer curious about building native apps for macOS or Android, the source code is there for you to learn from (or fork and make your own version).

The apps aren't perfect, but they do what I need them to do. If they help you maintain a journaling habit, that's a win.

**Links:**
- [macOS App & Source](https://github.com/chkry/DigitalGram)
- [Android App & Source](https://github.com/chkry/DigitalGramAndroid)

Happy journaling! 📝
