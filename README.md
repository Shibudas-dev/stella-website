# Stella — Discord Music Bot

A feature-rich Discord music bot with multi-platform streaming, audio filters, playlists, leaderboards, and more.

---

# Privacy Policy

**Last Updated:** February 18, 2026

This Privacy Policy describes how **Stella** ("the Bot", "we", "us") collects, uses, and protects your information when you interact with the Bot on Discord.

By using Stella, you agree to the collection and use of information in accordance with this policy.

---

## 1. Information We Collect

### 1.1 Automatically Collected Data

When you use Stella, we automatically collect and store:

| Data | Purpose | Stored As |
|------|---------|-----------|
| **Discord User ID** | Identify your account across servers | Numeric ID only |
| **Discord Server (Guild) ID** | Server-specific settings & configurations | Numeric ID only |
| **Music Listening Stats** | Weekly leaderboards & personal stats | Song count, listening time |
| **Play History** | Browse & replay recently played tracks | Song title, URL, artist, thumbnail |

### 1.2 User-Provided Data

When you voluntarily use specific features, we store:

| Data | Feature | Purpose |
|------|---------|---------|
| **Favorite Tracks** | `!favorites` / `!grab` | Save songs you love for quick access |
| **Custom Playlists** | `!playlist create` | Create, manage, and share playlists |
| **Spotify Profile Link** | `!spotify-link` | Link your Spotify profile (public URL, display name, profile image) |
| **Server Settings** | `!setprefix`, `!anonymous`, etc. | Custom prefix, anonymous channels, 24/7 mode, autoplay |

### 1.3 Data We Do NOT Collect

- ❌ **Usernames, nicknames, or display names** — We only store your numeric Discord User ID
- ❌ **Message content** — Messages are read in real-time for command parsing only; they are never logged or saved
- ❌ **Voice audio or recordings** — We never record voice channel audio
- ❌ **Email addresses or passwords**
- ❌ **IP addresses**
- ❌ **Direct Messages (DM) content**

---

## 2. How We Use Your Data

We use the collected data exclusively for:

- **Providing Bot functionality** — Playing music, managing queues, processing commands
- **Personal features** — Favorites, playlists, play history, listening stats
- **Leaderboards & gamification** — Weekly leaderboard rankings and music match games
- **Premium services** — Managing premium subscriptions and guild premium activations
- **Profile badges** — Checking your roles in our support server to display badges across all servers
- **Server configuration** — Saving per-server settings like custom prefixes and channel restrictions

We do **NOT**:
- Sell your data to third parties
- Use your data for advertising
- Share your data with external services (except our database provider)

---

## 3. Data Storage & Security

- All data is stored in **MongoDB Atlas**, which provides **AES-256 encryption at rest**
- Data is transmitted over **TLS-encrypted connections**
- Access to the database is restricted to the Bot's authorized systems only
- We follow Discord's [Developer Terms of Service](https://discord.com/developers/docs/policies-and-agreements/developer-terms-of-service) and [Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy)

---

## 4. Data Retention

| Data Type | Retention Period |
|-----------|-----------------|
| User preferences (favorites, playlists) | Until you request deletion |
| Listening stats (weekly) | Reset every Monday |
| Listening stats (all-time) | Until you request deletion |
| Play history | Until you request deletion |
| Server settings | Until the bot is removed from the server or deletion is requested |
| Premium data | Until premium expires or deletion is requested |
| Spotify link data | Until you unlink (`!spotify-unlink`) or request deletion |

---

## 5. Your Rights — Data Deletion

You have the right to request deletion of all your data at any time. To do so:

1. **Join our Support Server:** [https://discord.gg/V5kyZXWVxc](https://discord.gg/V5kyZXWVxc)
2. **Open a ticket** or contact the bot owner directly
3. Request deletion of your data — we will remove all stored information associated with your Discord User ID

We will process deletion requests within **7 days**.

---

## 6. Opting Out

- **Message Content:** The bot does not track or store any message content. Messages are only read in real-time for command parsing and anonymous messaging. You can opt out of anonymous messaging by not sending messages in the designated anonymous channel.
- **Listening Stats:** Stats are tracked automatically when you play music. Contact us via the support server to request stat removal.
- **Favorites & Playlists:** You can delete individual favorites using `!favorites remove` and playlists using `!playlist delete`.
- **Spotify Link:** You can unlink your Spotify at any time using `!spotify-unlink`.

---

## 7. Anonymous Messaging

The anonymous messaging feature (`!anonymous`) works as follows:
- When enabled in a channel, the bot reads messages sent in that channel
- The original message is **immediately deleted**
- The content is **reposted anonymously** by the bot
- **No message content is stored** at any point — it is processed in real-time only
- Only text, emojis, and special characters are forwarded; links, images, and attachments are ignored

---

## 8. Third-Party Services

Stella uses the following third-party services:

| Service | Purpose |
|---------|---------|
| **MongoDB Atlas** | Database storage (encrypted at rest) |
| **Lavalink** | Music audio streaming engine |
| **Discord API** | Core bot functionality |

We do not share your personal data with any other third-party services.

---

## 9. Children's Privacy

Stella does not knowingly collect information from children under the age of 13. If you are under 13, please do not use the Bot. This aligns with Discord's own [Terms of Service](https://discord.com/terms), which require users to be at least 13 years old.

---

## 10. Changes to This Policy

We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Last Updated" date. Continued use of the Bot after changes constitutes acceptance of the updated policy.

---

## 11. Contact Us

If you have any questions, concerns, or data deletion requests regarding this Privacy Policy, please reach out to us:

- **Support Server:** [https://discord.gg/V5kyZXWVxc](https://discord.gg/V5kyZXWVxc)
- **Bot Owner Discord ID:** `1219624638628233247`

---

*This Privacy Policy is effective as of February 18, 2026.*
