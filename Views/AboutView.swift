import SwiftUI

struct AboutView: View {
    let accentColor = Color(red: 165/255, green: 135/255, blue: 255/255)
    let altText = Color(red: 209/255, green: 209/255, blue: 209/255)
    let silverText = Color(red: 194/255, green: 194/255, blue: 194/255)

    let skills = [
        "Concept Development", "UX Design", "Rapid Prototyping",
        "Persona Mapping", "UX Audit", "Visual Design", "Illustrations"
    ]

    let playlists = [
        PlaylistItem(title: "Indie", imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/b0d41df2a201ee3df6238e08ce9839ce167de636?width=300"),
        PlaylistItem(title: "Workout", imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/303913f64e6ddad2031bc901faf5b7569d4ec5aa?width=300"),
        PlaylistItem(title: "Moodboard", imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/6a32820820c70cf97328a15ca3b5745abe1ef0e4?width=300")
    ]

    let experiences: [ExperienceItem] = [
        ExperienceItem(role: "Product Designer", company: "Rjuusity", period: "Sept 2025 – Current", type: "Full Time"),
        ExperienceItem(role: "Product Designer", company: "Testsigma", period: "July 2024 – Sept 2025", type: "Full Time"),
        ExperienceItem(role: "Product Design Intern", company: "Coteva", period: "Jan – July 2024", type: "Full Time")
    ]

    var body: some View {
        ScrollView {
            VStack(spacing: 0) {
                heroSection
                introSection
                experienceSection
                skillsSection
                musicSection
                dailyDriversSection
                contactFooter
            }
        }
        .background(Color.black)
        .ignoresSafeArea(edges: .bottom)
    }

    // MARK: - Hero Section
    private var heroSection: some View {
        VStack(spacing: 24) {
            Text("Happy to see you here :)")
                .font(.custom("Inter", size: 16))
                .foregroundColor(.white)
                .padding(.top, 32)

            Text("Need a developer(Full-stack)? I'll build it. Need a designer? I've got that too.")
                .font(.custom("Inter", size: 15))
                .foregroundColor(silverText)
                .multilineTextAlignment(.center)
                .padding(.horizontal, 28)

            AsyncImage(url: URL(string: "https://api.builder.io/api/v1/image/assets/TEMP/29e77a6c5658d7cdb2d637c818dba5f0f09e9f9b?width=760")) { image in
                image
                    .resizable()
                    .scaledToFill()
            } placeholder: {
                Rectangle().fill(Color(white: 0.1))
            }
            .frame(width: 200, height: 280)
            .clipped()
            .cornerRadius(12)
        }
        .frame(maxWidth: .infinity)
        .padding(.bottom, 40)
        .background(Color.black)
    }

    // MARK: - Intro Paragraph
    private var introSection: some View {
        VStack(alignment: .center, spacing: 16) {
            Text("Hi, I'm Bhakti, a developer and designer based in Bangalore.")
                .font(.system(size: 18, weight: .semibold))
                .foregroundColor(silverText)
                .multilineTextAlignment(.center)

            Text("I care about creating designs that feel clear, thoughtful, and genuinely helpful. I've worked on B2B SaaS product and AI platforms, most recently on Atto, an AI testing agent at Testsigma.\n\nComing from a computer science background, I enjoy building prototypes that feel close to real products, it helps me understand not just how something should look, but how it should work and feel.\n\nWhen I'm not designing, I'm probably writing, dancing around to music, trying new recipes, or planning my next short trip.\n\nI love asking questions, noticing the small stuff, and building products that make people think, \"this just works.\"")
                .font(.system(size: 16, weight: .semibold))
                .foregroundColor(silverText)
                .multilineTextAlignment(.center)
                .fixedSize(horizontal: false, vertical: true)

            // Life photos grid
            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible()), GridItem(.flexible())], spacing: 8) {
                ForEach([
                    "https://api.builder.io/api/v1/image/assets/TEMP/3d2f61ad8fcca95650b61ab762e96e7ed6803a14?width=300",
                    "https://api.builder.io/api/v1/image/assets/TEMP/b0d41df2a201ee3df6238e08ce9839ce167de636?width=300",
                    "https://api.builder.io/api/v1/image/assets/TEMP/51e438775193d302a3d0c5e8a52016b8b8c92c89?width=300",
                    "https://api.builder.io/api/v1/image/assets/TEMP/51bdedf83e700c1ba73630aaef814a01885645d9?width=300",
                    "https://api.builder.io/api/v1/image/assets/TEMP/8635b64102b646678320e2282c920da08abb5b15?width=300"
                ], id: \.self) { url in
                    AsyncImage(url: URL(string: url)) { image in
                        image.resizable().scaledToFill()
                    } placeholder: {
                        Rectangle().fill(Color(white: 0.1))
                    }
                    .frame(height: 90)
                    .clipped()
                    .cornerRadius(8)
                }
            }
        }
        .padding(.horizontal, 24)
        .padding(.vertical, 40)
        .background(Color.black)
    }

    // MARK: - Experience
    private var experienceSection: some View {
        VStack(alignment: .leading, spacing: 24) {
            HStack(alignment: .top) {
                VStack(alignment: .leading, spacing: 4) {
                    Text("Where I've ")
                        .font(.system(size: 28, weight: .bold))
                        .foregroundColor(altText)
                    Text("Been")
                        .font(.custom("PlayfairDisplay-Italic", size: 28))
                        .foregroundColor(accentColor)
                }
                Spacer()
            }

            VStack(spacing: 12) {
                ForEach(experiences) { exp in
                    experienceRow(exp)
                }
            }
        }
        .padding(.horizontal, 24)
        .padding(.vertical, 40)
    }

    private func experienceRow(_ exp: ExperienceItem) -> some View {
        HStack(spacing: 12) {
            RoundedRectangle(cornerRadius: 6)
                .fill(Color(white: 0.12))
                .frame(width: 36, height: 36)
                .overlay(
                    Image(systemName: "briefcase.fill")
                        .foregroundColor(accentColor)
                        .font(.system(size: 14))
                )

            VStack(alignment: .leading, spacing: 2) {
                Text(exp.role)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundColor(altText)
                Text("\(exp.company) • \(exp.type)")
                    .font(.custom("Inter", size: 13))
                    .foregroundColor(silverText)
            }

            Spacer()

            Text(exp.period)
                .font(.custom("Inter", size: 12))
                .foregroundColor(silverText.opacity(0.7))
                .multilineTextAlignment(.trailing)
        }
        .padding(16)
        .background(Color(white: 0.07))
        .cornerRadius(10)
        .overlay(RoundedRectangle(cornerRadius: 10).stroke(Color(white: 0.1), lineWidth: 1))
    }

    // MARK: - Skills
    private var skillsSection: some View {
        VStack(spacing: 20) {
            VStack(spacing: 4) {
                Text("Stuff I Do Really ")
                    .font(.system(size: 24, weight: .bold))
                    .foregroundColor(altText)
                + Text("Well")
                    .font(.custom("PlayfairDisplay-Italic", size: 24))
                    .foregroundColor(accentColor)

                Text("Skills that help me design for people, not personas.")
                    .font(.custom("Inter", size: 13))
                    .foregroundColor(silverText.opacity(0.6))
                    .multilineTextAlignment(.center)
            }

            FlowLayout(spacing: 10) {
                ForEach(skills, id: \.self) { skill in
                    skillPill(skill)
                }
            }
        }
        .padding(.horizontal, 24)
        .padding(.vertical, 40)
    }

    private func skillPill(_ text: String) -> some View {
        Text(text)
            .font(.custom("Inter", size: 14))
            .foregroundColor(altText)
            .padding(.horizontal, 18)
            .padding(.vertical, 10)
            .background(Color.clear)
            .overlay(
                Capsule().stroke(altText.opacity(0.4), lineWidth: 1.5)
            )
    }

    // MARK: - Music
    private var musicSection: some View {
        VStack(spacing: 20) {
            VStack(spacing: 4) {
                HStack(spacing: 4) {
                    Text("Now ")
                        .font(.system(size: 24, weight: .bold))
                        .foregroundColor(altText)
                    Text("Playing ")
                        .font(.custom("PlayfairDisplay-Italic", size: 24))
                        .foregroundColor(accentColor)
                    Text("\"My Life In Tracks\"")
                        .font(.system(size: 24, weight: .bold))
                        .foregroundColor(altText)
                }
                Text("Music fuels my design flow, mood boards, and midnight brainstorming.")
                    .font(.custom("Inter", size: 13))
                    .foregroundColor(silverText.opacity(0.6))
                    .multilineTextAlignment(.center)
            }

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 20) {
                    ForEach(playlists) { playlist in
                        playlistCard(playlist)
                    }
                }
                .padding(.horizontal, 24)
            }
        }
        .padding(.vertical, 40)
    }

    private func playlistCard(_ playlist: PlaylistItem) -> some View {
        VStack(spacing: 8) {
            ZStack {
                AsyncImage(url: URL(string: playlist.imageURL)) { image in
                    image.resizable().scaledToFill()
                } placeholder: {
                    Rectangle().fill(Color(white: 0.1))
                }
                .frame(width: 120, height: 120)
                .clipped()
                .cornerRadius(8)

                // Vinyl record overlay
                Circle()
                    .fill(Color.black.opacity(0.7))
                    .frame(width: 60, height: 60)
                    .overlay(
                        Circle().stroke(Color(white: 0.3), lineWidth: 1)
                    )
                    .overlay(
                        Circle()
                            .fill(Color(white: 0.15))
                            .frame(width: 12, height: 12)
                    )
                    .offset(x: 30)
            }

            Text(playlist.title)
                .font(.custom("Inter", size: 13))
                .foregroundColor(silverText)
        }
    }

    // MARK: - Daily Drivers
    private var dailyDriversSection: some View {
        VStack(spacing: 20) {
            VStack(spacing: 4) {
                Text("My ")
                    .font(.system(size: 24, weight: .bold))
                    .foregroundColor(altText)
                + Text("Daily ")
                    .font(.custom("PlayfairDisplay-Italic", size: 24))
                    .foregroundColor(accentColor)
                + Text("Drivers")
                    .font(.system(size: 24, weight: .bold))
                    .foregroundColor(altText)

                Text("Things I click obsessively.")
                    .font(.custom("Inter", size: 13))
                    .foregroundColor(silverText.opacity(0.6))
            }

            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible()), GridItem(.flexible())], spacing: 16) {
                ForEach(dailyDriverItems, id: \.name) { item in
                    VStack(spacing: 6) {
                        ZStack {
                            Circle()
                                .fill(Color(white: 0.08))
                                .frame(width: 56, height: 56)
                            Image(systemName: item.icon)
                                .foregroundColor(accentColor)
                                .font(.system(size: 20))
                        }
                        Text(item.name)
                            .font(.custom("Inter", size: 12))
                            .foregroundColor(silverText)
                    }
                }
            }
            .padding(.horizontal, 40)
        }
        .padding(.horizontal, 24)
        .padding(.vertical, 40)
    }

    private var dailyDriverItems: [DailyDriver] {
        [
            DailyDriver(name: "Figma", icon: "rectangle.3.group"),
            DailyDriver(name: "Notion", icon: "doc.text"),
            DailyDriver(name: "Spotify", icon: "music.note"),
            DailyDriver(name: "Framer", icon: "wand.and.stars"),
            DailyDriver(name: "Loom", icon: "video"),
            DailyDriver(name: "Twitter", icon: "bird")
        ]
    }

    // MARK: - Contact Footer
    private var contactFooter: some View {
        VStack(spacing: 20) {
            Text("Currently seeking full-time opportunities")
                .font(.custom("PlayfairDisplay-Regular", size: 14))
                .foregroundColor(Color.white.opacity(0.8))

            VStack(spacing: 2) {
                Text("Don't Shy")
                    .font(.system(size: 38, weight: .bold))
                    .foregroundColor(.white)
                HStack(spacing: 4) {
                    Text(", Say ")
                        .font(.custom("PlayfairDisplay-Italic", size: 40))
                        .foregroundColor(.white)
                    Text("Hi!")
                        .font(.custom("PlayfairDisplay-Italic", size: 40))
                        .foregroundColor(.white)
                }
            }

            Button(action: {}) {
                Text("Let's Talk")
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundColor(.black)
                    .padding(.horizontal, 28)
                    .padding(.vertical, 10)
                    .background(Color.white)
                    .cornerRadius(8)
            }

            VStack(spacing: 4) {
                Text("© 2025 Bhakti Dangri Design")
                    .font(.custom("PlayfairDisplay-Regular", size: 12))
                    .foregroundColor(Color.white.opacity(0.6))
                Text("Designed with love in Bengaluru")
                    .font(.custom("Inter", size: 11))
                    .foregroundColor(Color.white.opacity(0.4))
            }
            .padding(.top, 24)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 48)
        .padding(.horizontal, 24)
        .background(accentColor)
    }
}

// MARK: - Supporting Models

struct ExperienceItem: Identifiable {
    let id = UUID()
    let role: String
    let company: String
    let period: String
    let type: String
}

struct PlaylistItem: Identifiable {
    let id = UUID()
    let title: String
    let imageURL: String
}

struct DailyDriver {
    let name: String
    let icon: String
}

// MARK: - Flow Layout

struct FlowLayout: Layout {
    var spacing: CGFloat = 8

    func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize {
        let maxWidth = proposal.width ?? UIScreen.main.bounds.width
        var currentX: CGFloat = 0
        var currentY: CGFloat = 0
        var lineHeight: CGFloat = 0

        for subview in subviews {
            let size = subview.sizeThatFits(.unspecified)
            if currentX + size.width > maxWidth && currentX > 0 {
                currentX = 0
                currentY += lineHeight + spacing
                lineHeight = 0
            }
            currentX += size.width + spacing
            lineHeight = max(lineHeight, size.height)
        }
        return CGSize(width: maxWidth, height: currentY + lineHeight)
    }

    func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) {
        let maxWidth = bounds.width
        var currentX = bounds.minX
        var currentY = bounds.minY
        var lineHeight: CGFloat = 0

        for subview in subviews {
            let size = subview.sizeThatFits(.unspecified)
            if currentX + size.width > bounds.maxX && currentX > bounds.minX {
                currentX = bounds.minX
                currentY += lineHeight + spacing
                lineHeight = 0
            }
            subview.place(at: CGPoint(x: currentX, y: currentY), proposal: ProposedViewSize(size))
            currentX += size.width + spacing
            lineHeight = max(lineHeight, size.height)
        }
    }
}

#Preview {
    NavigationStack {
        AboutView()
            .preferredColorScheme(.dark)
    }
}
