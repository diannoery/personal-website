export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Phincon",
    position: "iOS Developer",
    period: "2023 - Present",
    description: "contributing to the development and maintenance of iOS applications. I collaborate with the development team, implement new features, and ensure optimal performance and user experience. My technical expertise includes Swift, Objective-C, Xcode, UIKit, SwiftUI, RxSwift, and Git. I have expertise in iOS application development leveraging Swift and Model-View-Controller (MVC) architecture. I also use RxSwift for reactive programming and efficient asynchronous tasks. Additionally, I have experience integrating Restful APIs to maintain seamless communication between front-end and back-end and work with cross-functional teams to enhance features and optimize application performance.",
    technologies: ["Swift", "UIKit", "MVVM", "RXSwift"]
  },
  {
    company: "PT. Infosys Solusi Terpadu",
    position: "iOS Developer",
    period: "2021 - 2023",
    description: "Experienced in Front-End development with a focus on integrating Restful APIs in collaboration with Back-End Developers to ensure seamless data flow and functionality. Proficient in implementing UI kits to translate designs into user-friendly features using the Swift programming language on mobile platforms. Skilled in managing dependencies such as CocoaPods for efficient dependency management and RXSwift for handling asynchronous and event-driven tasks. Additionally, adept at applying the VIPER architecture to ensure scalability, maintainability, and a clear separation of concerns in the development process.",
    technologies: ["Swift", "UIKit", "VIPER", "RXSwift"]
  },
];