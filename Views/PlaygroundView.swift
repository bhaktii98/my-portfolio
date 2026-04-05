import SwiftUI

struct PlaygroundView: View {
    let accentColor = Color(red: 165/255, green: 135/255, blue: 255/255)
    let altText = Color(red: 209/255, green: 209/255, blue: 209/255)
    let silverText = Color(red: 194/255, green: 194/255, blue: 194/255)

    let galleryImages = [
        GalleryItem(
            imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/6a32820820c70cf97328a15ca3b5745abe1ef0e4?width=1251",
            title: "My Musing Palette",
            description: "Started with Figma tutorials, graduated to code (as the mantra goes!). Name went offline too, but my passion for design stayed. Tried to make a perfect square that time to bring Discipline."
        ),
        GalleryItem(
            imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/e98c31681fc6d78cb5b9d176a73c2482d446d094?width=2416",
            title: "Found Playground",
            description: "Intern gig and workshops UI/UX design. Total game changer for me. Turns out, user experience design is like this playground where my love for tech, art, people-watching, and fixing problems can all have a party. Bonus points is it can make a social impact? Sign me up."
        ),
        GalleryItem(
            imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/303913f64e6ddad2031bc901faf5b7569d4ec5aa?width=3712",
            title: "My Design Journey",
            description: "No rigid rules for this designer! It's like jazz, improvisational, ever-evolving, and always in sync. User experience design? It's way more than what you see but what you feel."
        )
    ]

    let processSteps: [ProcessStep] = [
        ProcessStep(
            imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/b0d41df2a201ee3df6238e08ce9839ce167de636?width=910",
            title: "Discover & Strategize",
            description: "Dig deep into the issue, making sure to fully understand the business and user demands, the context, and the state of the competition. Basically, gathering all the intel to build a solid foundation."
        ),
        ProcessStep(
            imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/8635b64102b646678320e2282c920da08abb5b15?width=910",
            title: "Iterate",
            description: "No idea is too crazy, sketch it out and see what happens! Come up with as many concepts as you can. Try out new ideas and experiments without fear. Make prototypes, wireframes, and sketches."
        ),
        ProcessStep(
            imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/51e438775193d302a3d0c5e8a52016b8b8c92c89?width=910",
            title: "Deliver & Evaluate",
            description: "Time to launch! Analyse whether the product is feasible and get user input. Get ready to make product changes in regard to the information you gained."
        ),
        ProcessStep(
            imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/51bdedf83e700c1ba73630aaef814a01885645d9?width=910",
            title: "Evaluate",
            description: "The case never closes! Analyze data and user feedback, constantly refining the experience. Because a great design always gets better!"
        )
    ]

    var body: some View {
        ScrollView {
            VStack(spacing: 0) {
                heroSection
                gallerySection
                processSection
                philosophySection
                contactFooter
            }
        }
        .background(Color.black)
        .ignoresSafeArea(edges: .bottom)
    }

    // MARK: - Hero
    private var heroSection: some View {
        VStack(spacing: 24) {
            VStack(spacing: 8) {
                Text("Bhakti's Design")
                    .font(.custom("PlayfairDisplay-Italic", size: 44))
                    .foregroundColor(altText)
                    .multilineTextAlignment(.center)

                Text("Let's have a wild design journey to uncover Bhakti's design principles, ethics and passion.")
                    .font(.custom("Inter", size: 15))
                    .foregroundColor(altText)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 32)

                Text("ODYSSEY")
                    .font(.custom("LibreBaskerville-Italic", size: 44))
                    .foregroundColor(.white)
                    .tracking(2)
            }
            .padding(.top, 48)

            // Hero image - abstract art
            AsyncImage(url: URL(string: "https://api.builder.io/api/v1/image/assets/TEMP/6a32820820c70cf97328a15ca3b5745abe1ef0e4?width=1251")) { image in
                image
                    .resizable()
                    .scaledToFill()
            } placeholder: {
                Rectangle().fill(Color(white: 0.08))
            }
            .frame(maxWidth: .infinity)
            .frame(height: 340)
            .clipped()
            .cornerRadius(12)
            .padding(.horizontal, 16)

            Spacer().frame(height: 24)
        }
        .background(Color.black)
    }

    // MARK: - Gallery Section
    private var gallerySection: some View {
        VStack(spacing: 48) {
            ForEach(Array(galleryImages.enumerated()), id: \.offset) { index, item in
                galleryCard(item: item, isReversed: index % 2 != 0)
            }
        }
        .padding(.horizontal, 20)
        .padding(.vertical, 40)
    }

    private func galleryCard(item: GalleryItem, isReversed: Bool) -> some View {
        VStack(alignment: .leading, spacing: 16) {
            AsyncImage(url: URL(string: item.imageURL)) { image in
                image
                    .resizable()
                    .scaledToFill()
            } placeholder: {
                Rectangle().fill(Color(white: 0.08))
            }
            .frame(maxWidth: .infinity)
            .frame(height: 240)
            .clipped()
            .cornerRadius(10)

            VStack(alignment: .leading, spacing: 8) {
                Text(item.title)
                    .font(.custom("PlayfairDisplay-Italic", size: 20))
                    .foregroundColor(altText)
                Text(item.description)
                    .font(.custom("Inter", size: 14))
                    .foregroundColor(silverText)
                    .fixedSize(horizontal: false, vertical: true)
            }
        }
    }

    // MARK: - Process Section
    private var processSection: some View {
        VStack(spacing: 32) {
            VStack(spacing: 8) {
                Text("My Design Process")
                    .font(.custom("PlayfairDisplay-Italic", size: 28))
                    .foregroundColor(altText)

                Text("No rigid rules — it's like jazz. Improvisational, ever-evolving, and always in sync.")
                    .font(.custom("Inter", size: 14))
                    .foregroundColor(silverText)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 32)
            }

            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 16) {
                ForEach(processSteps) { step in
                    processCard(step)
                }
            }
            .padding(.horizontal, 20)
        }
        .padding(.vertical, 48)
    }

    private func processCard(_ step: ProcessStep) -> some View {
        VStack(alignment: .leading, spacing: 12) {
            AsyncImage(url: URL(string: step.imageURL)) { image in
                image
                    .resizable()
                    .scaledToFill()
            } placeholder: {
                Rectangle().fill(Color(white: 0.08))
            }
            .frame(maxWidth: .infinity)
            .frame(height: 150)
            .clipped()
            .cornerRadius(8)

            Text(step.title)
                .font(.custom("PlayfairDisplay-Italic", size: 17))
                .foregroundColor(altText)

            Text(step.description)
                .font(.custom("Inter", size: 12))
                .foregroundColor(silverText)
                .fixedSize(horizontal: false, vertical: true)
        }
        .padding(12)
        .background(Color(white: 0.05))
        .cornerRadius(10)
        .overlay(RoundedRectangle(cornerRadius: 10).stroke(Color(white: 0.08), lineWidth: 1))
    }

    // MARK: - Philosophy Section
    private var philosophySection: some View {
        VStack(spacing: 24) {
            VStack(spacing: 20) {
                philosophyCard(
                    imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/405f56e4bdf1a74101ad80db9e5773ea99eddb64?width=2459",
                    title: "Dawn of Integration",
                    description: "The world of tech has always fascinated me. Emerging technologies like AI/ML, Deep learning spark a fire in my imagination. They hold potential to revolutionize the way we live, work, and interact with the world, and the intersection of design and these innovations excites me."
                )
                philosophyCard(
                    imageURL: "https://api.builder.io/api/v1/image/assets/TEMP/aa414b245a221e22ffdfd01814fae3c937364012?width=1229",
                    title: "My Design Philosophy",
                    description: "My philosophy is to design with a human in mind and to combine empathy with curiosity and where Sustainability is a core principle. I know the power of inclusivity. Great design isn't just about looks, it's a bridge between human needs and tech solutions."
                )
            }
            .padding(.horizontal, 20)
        }
        .padding(.vertical, 48)
    }

    private func philosophyCard(imageURL: String, title: String, description: String) -> some View {
        VStack(alignment: .leading, spacing: 14) {
            AsyncImage(url: URL(string: imageURL)) { image in
                image
                    .resizable()
                    .scaledToFill()
            } placeholder: {
                Rectangle().fill(Color(white: 0.08))
            }
            .frame(maxWidth: .infinity)
            .frame(height: 220)
            .clipped()
            .cornerRadius(10)

            Text(title)
                .font(.custom("PlayfairDisplay-Italic", size: 20))
                .foregroundColor(altText)

            Text(description)
                .font(.custom("Inter", size: 14))
                .foregroundColor(silverText)
                .fixedSize(horizontal: false, vertical: true)
        }
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
                HStack(spacing: 0) {
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

            HStack(spacing: 24) {
                Text("Resume")
                    .font(.custom("Inter", size: 13))
                    .foregroundColor(Color.white.opacity(0.7))
                Text("Contact")
                    .font(.custom("Inter", size: 13))
                    .foregroundColor(Color.white.opacity(0.7))
            }
            .padding(.top, 16)

            Text("© 2025 Bhakti Dangri Design")
                .font(.custom("PlayfairDisplay-Regular", size: 12))
                .foregroundColor(Color.white.opacity(0.5))
                .padding(.top, 8)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 48)
        .padding(.horizontal, 24)
        .background(accentColor)
    }
}

// MARK: - Models

struct GalleryItem: Identifiable {
    let id = UUID()
    let imageURL: String
    let title: String
    let description: String
}

struct ProcessStep: Identifiable {
    let id = UUID()
    let imageURL: String
    let title: String
    let description: String
}

#Preview {
    NavigationStack {
        PlaygroundView()
            .preferredColorScheme(.dark)
    }
}
