import SwiftUI

struct ContentView: View {
    @State private var selectedTab = 0

    let accentColor = Color(red: 165/255, green: 135/255, blue: 255/255)

    var body: some View {
        TabView(selection: $selectedTab) {
            NavigationStack {
                HomeView()
                    .navigationTitle("Portfolio")
                    .navigationBarTitleDisplayMode(.inline)
                    .toolbarBackground(Color.black, for: .navigationBar)
                    .toolbarBackground(.visible, for: .navigationBar)
                    .toolbarColorScheme(.dark, for: .navigationBar)
                    .toolbar {
                        ToolbarItem(placement: .navigationBarLeading) {
                            Text("Bhakti Dangri")
                                .font(.custom("PlayfairDisplay-Italic", size: 16))
                                .foregroundColor(Color(red: 165/255, green: 135/255, blue: 255/255))
                        }
                    }
            }
            .tabItem {
                Label("Work", systemImage: "briefcase.fill")
            }
            .tag(0)

            NavigationStack {
                PlaygroundView()
                    .navigationTitle("Playground")
                    .navigationBarTitleDisplayMode(.inline)
                    .toolbarBackground(Color.black, for: .navigationBar)
                    .toolbarBackground(.visible, for: .navigationBar)
                    .toolbarColorScheme(.dark, for: .navigationBar)
            }
            .tabItem {
                Label("Playground", systemImage: "paintbrush.fill")
            }
            .tag(1)

            NavigationStack {
                AboutView()
                    .navigationTitle("About")
                    .navigationBarTitleDisplayMode(.inline)
                    .toolbarBackground(Color.black, for: .navigationBar)
                    .toolbarBackground(.visible, for: .navigationBar)
                    .toolbarColorScheme(.dark, for: .navigationBar)
            }
            .tabItem {
                Label("About", systemImage: "person.fill")
            }
            .tag(2)

            NavigationStack {
                ResumeView()
                    .navigationTitle("Resume")
                    .navigationBarTitleDisplayMode(.inline)
                    .toolbarBackground(Color.black, for: .navigationBar)
                    .toolbarBackground(.visible, for: .navigationBar)
                    .toolbarColorScheme(.dark, for: .navigationBar)
            }
            .tabItem {
                Label("Resume", systemImage: "doc.text.fill")
            }
            .tag(3)
        }
        .tint(accentColor)
        .preferredColorScheme(.dark)
    }
}

// MARK: - Resume View (placeholder linking out)
struct ResumeView: View {
    let accentColor = Color(red: 165/255, green: 135/255, blue: 255/255)
    let altText = Color(red: 209/255, green: 209/255, blue: 209/255)
    let silverText = Color(red: 194/255, green: 194/255, blue: 194/255)

    var body: some View {
        ScrollView {
            VStack(spacing: 40) {
                Spacer().frame(height: 40)

                // Profile
                VStack(spacing: 16) {
                    AsyncImage(url: URL(string: "https://api.builder.io/api/v1/image/assets/TEMP/29e77a6c5658d7cdb2d637c818dba5f0f09e9f9b?width=400")) { image in
                        image.resizable().scaledToFill()
                    } placeholder: {
                        Circle().fill(Color(white: 0.1))
                    }
                    .frame(width: 100, height: 100)
                    .clipShape(Circle())
                    .overlay(Circle().stroke(accentColor, lineWidth: 2))

                    Text("Bhakti Dangri")
                        .font(.system(size: 24, weight: .bold))
                        .foregroundColor(altText)

                    Text("Developer & Designer • Bengaluru")
                        .font(.custom("PlayfairDisplay-Italic", size: 16))
                        .foregroundColor(accentColor)

                    Text("Need a developer? I'll build it. Need a designer? I've got that too.")
                        .font(.custom("Inter", size: 14))
                        .foregroundColor(silverText)
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 24)

                    Text("Creating thoughtful, human-centered designs that bridge tech and people.")
                        .font(.custom("Inter", size: 14))
                        .foregroundColor(silverText)
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 32)
                }

                // Download button
                Button(action: {}) {
                    HStack(spacing: 8) {
                        Image(systemName: "arrow.down.doc.fill")
                        Text("Download Resume")
                            .font(.system(size: 16, weight: .semibold))
                    }
                    .foregroundColor(.black)
                    .padding(.horizontal, 28)
                    .padding(.vertical, 12)
                    .background(accentColor)
                    .cornerRadius(8)
                }

                // Experience
                VStack(alignment: .leading, spacing: 16) {
                    sectionTitle("Experience")

                    ForEach([
                        ("Product Designer", "Rjuusity", "Sept 2025 – Present"),
                        ("Product Designer", "Testsigma", "July 2024 – Sept 2025"),
                        ("Product Design Intern", "Coteva", "Jan – July 2024")
                    ], id: \.0) { role, company, period in
                        resumeRow(role: role, company: company, period: period)
                    }
                }
                .padding(.horizontal, 24)

                // Education
                VStack(alignment: .leading, spacing: 16) {
                    sectionTitle("Education")
                    resumeRow(role: "B.Tech Computer Science", company: "University", period: "2020 – 2024")
                }
                .padding(.horizontal, 24)

                // Skills
                VStack(alignment: .leading, spacing: 12) {
                    sectionTitle("Skills")
                    let skills = ["UX Design", "UI Design", "Figma", "Framer", "Prototyping",
                                  "User Research", "Visual Design", "Illustrations", "UX Audit"]
                    FlowLayout(spacing: 8) {
                        ForEach(skills, id: \.self) { skill in
                            Text(skill)
                                .font(.custom("Inter", size: 13))
                                .foregroundColor(altText)
                                .padding(.horizontal, 14)
                                .padding(.vertical, 8)
                                .background(Color(white: 0.08))
                                .cornerRadius(20)
                                .overlay(Capsule().stroke(Color(white: 0.15), lineWidth: 1))
                        }
                    }
                }
                .padding(.horizontal, 24)

                Spacer().frame(height: 40)
            }
        }
        .background(Color.black)
    }

    private func sectionTitle(_ title: String) -> some View {
        Text(title)
            .font(.system(size: 18, weight: .bold))
            .foregroundColor(altText)
            .padding(.bottom, 4)
    }

    private func resumeRow(role: String, company: String, period: String) -> some View {
        HStack {
            VStack(alignment: .leading, spacing: 4) {
                Text(role)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundColor(altText)
                Text(company)
                    .font(.custom("Inter", size: 13))
                    .foregroundColor(silverText)
            }
            Spacer()
            Text(period)
                .font(.custom("Inter", size: 12))
                .foregroundColor(silverText.opacity(0.7))
                .multilineTextAlignment(.trailing)
        }
        .padding(16)
        .background(Color(white: 0.06))
        .cornerRadius(10)
        .overlay(RoundedRectangle(cornerRadius: 10).stroke(Color(white: 0.1), lineWidth: 1))
    }
}

#Preview {
    ContentView()
}
