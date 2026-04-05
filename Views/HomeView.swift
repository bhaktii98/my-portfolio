import SwiftUI

struct HomeView: View {
    let accentColor = Color(red: 165/255, green: 135/255, blue: 255/255)
    let altText = Color(red: 209/255, green: 209/255, blue: 209/255)
    let silverText = Color(red: 194/255, green: 194/255, blue: 194/255)

    var body: some View {
        ScrollView {
            VStack(spacing: 0) {
                heroSection
                mainPlotsSection
                lowKeyStarsSection
                hireSection
                sketchedSection
                lifeAroundSection
                contactFooter
            }
        }
        .background(Color.black)
        .ignoresSafeArea(edges: .bottom)
    }

    // MARK: - Hero Section
    private var heroSection: some View {
        VStack(alignment: .leading, spacing: 24) {
            VStack(alignment: .leading, spacing: 10) {
                Text("I'm ")
                    .font(.custom("PlayfairDisplay-Italic", size: 36))
                    .foregroundColor(altText)
                + Text("Bhakti Dangri")
                    .font(.custom("PlayfairDisplay-Italic", size: 36))
                    .foregroundColor(accentColor)

                Text("Need a developer? I'll build it. Need a designer? I've got that too.")
                    .font(.custom("Inter", size: 16))
                    .foregroundColor(silverText)
                    .fixedSize(horizontal: false, vertical: true)
            }
            .padding(.horizontal, 24)
            .padding(.top, 40)

            // Avatar stack
            HStack(spacing: -12) {
                avatarImage(url: "https://api.builder.io/api/v1/image/assets/TEMP/ed8d44266c9d1d9f893f9763ddbcc5cff66ea5e9?width=106", rotation: 4)
                avatarImage(url: "https://api.builder.io/api/v1/image/assets/TEMP/5dbf2206d7c8f71d7f74c1cd2305c5386224897a?width=106", rotation: -3)
                avatarImage(url: "https://api.builder.io/api/v1/image/assets/TEMP/cf63ba854b23193123c9e7beab8c170e76beaad0?width=106", rotation: 2)
            }
            .padding(.horizontal, 24)

            // Social icon row
            HStack(spacing: 12) {
                Image(systemName: "camera.fill")
                    .foregroundColor(altText)
                    .font(.system(size: 14))
                Text("@bhaktidangri")
                    .font(.custom("Inter", size: 14))
                    .foregroundColor(silverText)
            }
            .padding(.horizontal, 24)

            // Hero illustration
            AsyncImage(url: URL(string: "https://api.builder.io/api/v1/image/assets/TEMP/23f3c254e9cddb50a09575a20ca17b6ddfb6bb05?width=600")) { image in
                image
                    .resizable()
                    .scaledToFill()
            } placeholder: {
                Rectangle().fill(Color(white: 0.1))
            }
            .frame(maxWidth: .infinity)
            .frame(height: 240)
            .clipped()
            .padding(.horizontal, 24)
            .cornerRadius(12)
        }
        .padding(.bottom, 40)
    }

    // MARK: - Main Plots Section
    private var mainPlotsSection: some View {
        VStack(spacing: 32) {
            sectionHeader(regular: "Main", italic: "Plots", subtitle: "Grab a coffee, take your time, each one's got its own story arc.")

            VStack(spacing: 32) {
                projectCard(
                    imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/23f3c254e9cddb50a09575a20ca17b6ddfb6bb05?width=800",
                    year: "'24",
                    title: "Streamlining Travel Planning: Itinerary to Touchdown",
                    description: "Designed an intelligent platform that centralizes itinerary building, bookings, budget management, and real-time trip control — crafted for seamless, stress-free travel experiences at every stage.",
                    tag: "SaaS • Travel"
                )
                projectCard(
                    imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/af58c2cd71efaabff6075adceb73194e6912bde0?width=800",
                    year: "'24",
                    title: "Redesigning the B2B Analytics Dashboard",
                    description: "A comprehensive redesign of a complex data analytics platform to improve usability, reduce cognitive load, and help teams make faster, smarter decisions.",
                    tag: "B2B • Analytics"
                )
                projectCard(
                    imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/7958dad5bc8983910a8ac2db016311723525282d?width=800",
                    year: "'23",
                    title: "Plant App — A Healthcare E-Discovery for Alpine",
                    description: "Mobile-first design for an AI-powered plant discovery and care app, blending clean visual language with intuitive interactions.",
                    tag: "Mobile • Health"
                )
                projectCard(
                    imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=800",
                    year: "'23",
                    title: "AI Testing Agent — Atto by Testsigma",
                    description: "Designed end-to-end UX flows for an AI-powered testing agent platform used by engineering teams worldwide.",
                    tag: "AI • SaaS"
                )
            }
            .padding(.horizontal, 20)
        }
        .padding(.vertical, 48)
    }

    // MARK: - Low-Key Stars
    private var lowKeyStarsSection: some View {
        VStack(spacing: 24) {
            sectionHeader(regular: "Low-Key", italic: "Stars.", subtitle: "Not spotlighted, but still stellar.")

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 16) {
                    ForEach([
                        "https://api.builder.io/api/v1/image/assets/TEMP/cnlP0uhHTQ1WDjUM6zrdxLQYo.png?width=600",
                        "https://api.builder.io/api/v1/image/assets/TEMP/7958dad5bc8983910a8ac2db016311723525282d?width=600",
                        "https://api.builder.io/api/v1/image/assets/TEMP/23f3c254e9cddb50a09575a20ca17b6ddfb6bb05?width=600",
                        "https://api.builder.io/api/v1/image/assets/TEMP/af58c2cd71efaabff6075adceb73194e6912bde0?width=600"
                    ], id: \.self) { url in
                        AsyncImage(url: URL(string: url)) { image in
                            image.resizable().scaledToFill()
                        } placeholder: {
                            Rectangle().fill(Color(white: 0.1))
                        }
                        .frame(width: 260, height: 180)
                        .clipped()
                        .cornerRadius(12)
                    }
                }
                .padding(.horizontal, 20)
            }
        }
        .padding(.vertical, 48)
    }

    // MARK: - You Should Hire Me
    private var hireSection: some View {
        VStack(spacing: 24) {
            VStack(spacing: 6) {
                Text("You Should ")
                    .font(.system(size: 32, weight: .bold))
                    .foregroundColor(altText)
                + Text("Hire Me!")
                    .font(.custom("PlayfairDisplay-Italic", size: 32))
                    .foregroundColor(accentColor)

                Text("The reasons are all here.")
                    .font(.custom("Inter", size: 14))
                    .foregroundColor(silverText.opacity(0.6))
            }

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 16) {
                    hireCard(title: "I turn sketches into reality", subtitle: "From idea to prototype in record time")
                    hireCard(title: "I help the users first", subtitle: "Always designing with empathy")
                    hireCard(title: "I create and craft with code", subtitle: "Design + dev — a rare combo")
                }
                .padding(.horizontal, 20)
            }
        }
        .padding(.vertical, 48)
    }

    // MARK: - Sketched & Said
    private var sketchedSection: some View {
        VStack(spacing: 24) {
            sectionHeader(regular: "Sketched", italic: "& Said", subtitle: "Things I've drawn and words I've placed in the world.")

            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible()), GridItem(.flexible()), GridItem(.flexible())], spacing: 12) {
                ForEach([
                    "https://api.builder.io/api/v1/image/assets/TEMP/3d2f61ad8fcca95650b61ab762e96e7ed6803a14?width=360",
                    "https://api.builder.io/api/v1/image/assets/TEMP/29e77a6c5658d7cdb2d637c818dba5f0f09e9f9b?width=360",
                    "https://api.builder.io/api/v1/image/assets/TEMP/ed8d44266c9d1d9f893f9763ddbcc5cff66ea5e9?width=360",
                    "https://api.builder.io/api/v1/image/assets/TEMP/5dbf2206d7c8f71d7f74c1cd2305c5386224897a?width=360"
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
            .padding(.horizontal, 20)
        }
        .padding(.vertical, 48)
    }

    // MARK: - Life Around Me
    private var lifeAroundSection: some View {
        VStack(spacing: 16) {
            VStack(spacing: 4) {
                Text("Life ")
                    .font(.system(size: 28, weight: .bold))
                    .foregroundColor(altText)
                + Text("Around")
                    .font(.custom("PlayfairDisplay-Italic", size: 28))
                    .foregroundColor(accentColor)
                + Text("Me")
                    .font(.system(size: 28, weight: .bold))
                    .foregroundColor(altText)

                Text("Bits of the world that catch my eye.")
                    .font(.custom("Inter", size: 14))
                    .foregroundColor(silverText.opacity(0.6))
            }

            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 12) {
                ForEach([
                    "https://api.builder.io/api/v1/image/assets/TEMP/b0d41df2a201ee3df6238e08ce9839ce167de636?width=500",
                    "https://api.builder.io/api/v1/image/assets/TEMP/303913f64e6ddad2031bc901faf5b7569d4ec5aa?width=500",
                    "https://api.builder.io/api/v1/image/assets/TEMP/6a32820820c70cf97328a15ca3b5745abe1ef0e4?width=500",
                    "https://api.builder.io/api/v1/image/assets/TEMP/cf63ba854b23193123c9e7beab8c170e76beaad0?width=500"
                ], id: \.self) { url in
                    AsyncImage(url: URL(string: url)) { image in
                        image.resizable().scaledToFill()
                    } placeholder: {
                        Rectangle().fill(Color(white: 0.1))
                    }
                    .frame(height: 160)
                    .clipped()
                    .cornerRadius(10)
                }
            }
            .padding(.horizontal, 20)
        }
        .padding(.vertical, 48)
    }

    // MARK: - Contact Footer
    private var contactFooter: some View {
        VStack(spacing: 20) {
            Text("Currently seeking full-time opportunities")
                .font(.custom("PlayfairDisplay-Regular", size: 14))
                .foregroundColor(Color(red: 250/255, green: 250/255, blue: 250/255).opacity(0.8))

            VStack(spacing: 4) {
                Text("Don't Shy")
                    .font(.system(size: 40, weight: .bold))
                    .foregroundColor(Color(red: 250/255, green: 250/255, blue: 250/255))
                + Text(", Say ")
                    .font(.custom("PlayfairDisplay-Italic", size: 42))
                    .foregroundColor(Color(red: 250/255, green: 250/255, blue: 250/255))
                + Text("Hi!")
                    .font(.custom("PlayfairDisplay-Italic", size: 42))
                    .foregroundColor(Color(red: 250/255, green: 250/255, blue: 250/255))
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

            Text("© 2025 Bhakti Dangri Design")
                .font(.custom("PlayfairDisplay-Regular", size: 12))
                .foregroundColor(Color.white.opacity(0.6))
                .padding(.top, 24)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 48)
        .padding(.horizontal, 24)
        .background(accentColor)
    }

    // MARK: - Helpers

    private func avatarImage(url: String, rotation: Double) -> some View {
        AsyncImage(url: URL(string: url)) { image in
            image.resizable().scaledToFill()
        } placeholder: {
            Circle().fill(Color(white: 0.2))
        }
        .frame(width: 44, height: 44)
        .clipShape(RoundedRectangle(cornerRadius: 10))
        .overlay(RoundedRectangle(cornerRadius: 10).stroke(Color(red: 240/255, green: 240/255, blue: 240/255), lineWidth: 2))
        .rotationEffect(.degrees(rotation))
        .shadow(color: .black.opacity(0.3), radius: 8, x: 0, y: 4)
    }

    private func sectionHeader(regular: String, italic: String, subtitle: String) -> some View {
        VStack(spacing: 6) {
            HStack(spacing: 4) {
                Text(regular + " ")
                    .font(.system(size: 32, weight: .bold))
                    .foregroundColor(altText)
                Text(italic)
                    .font(.custom("PlayfairDisplay-Italic", size: 32))
                    .foregroundColor(accentColor)
            }
            Text(subtitle)
                .font(.custom("Inter", size: 14))
                .foregroundColor(silverText.opacity(0.6))
                .multilineTextAlignment(.center)
        }
    }

    private func projectCard(imageURL: String, year: String, title: String, description: String, tag: String) -> some View {
        VStack(alignment: .leading, spacing: 0) {
            AsyncImage(url: URL(string: imageURL)) { image in
                image.resizable().scaledToFill()
            } placeholder: {
                Rectangle().fill(Color(white: 0.08))
            }
            .frame(maxWidth: .infinity)
            .frame(height: 220)
            .clipped()
            .cornerRadius(10)

            VStack(alignment: .leading, spacing: 12) {
                HStack {
                    Text(year)
                        .font(.custom("PlayfairDisplay-Regular", size: 14))
                        .foregroundColor(altText)
                    Rectangle()
                        .fill(accentColor)
                        .frame(width: 36, height: 1)
                    Text(tag)
                        .font(.custom("Inter", size: 12))
                        .foregroundColor(silverText)
                    Spacer()
                }
                Text(title)
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundColor(altText)
                    .fixedSize(horizontal: false, vertical: true)
                Text(description)
                    .font(.custom("Inter", size: 14))
                    .foregroundColor(silverText)
                    .fixedSize(horizontal: false, vertical: true)
            }
            .padding(.top, 16)
        }
    }

    private func hireCard(title: String, subtitle: String) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(title)
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(altText)
            Text(subtitle)
                .font(.custom("Inter", size: 13))
                .foregroundColor(silverText)
        }
        .padding(20)
        .frame(width: 220)
        .background(Color(white: 0.07))
        .cornerRadius(12)
        .overlay(RoundedRectangle(cornerRadius: 12).stroke(Color(white: 0.12), lineWidth: 1))
    }
}

#Preview {
    NavigationStack {
        HomeView()
            .preferredColorScheme(.dark)
    }
}
