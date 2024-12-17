export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  appStore?: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "Build a MyTelkomsel App",
    description: "I contribute to the development and maintenance of iOS applications, including MyTelkomsel. My responsibilities include implementing new features, optimizing performance, and ensuring a seamless user experience. I specialize in Swift, RxSwift, and MVVM architecture, leveraging reactive programming for efficient asynchronous tasks. Additionally, I integrate Restful APIs for smooth front-end and back-end communication while collaborating with cross-functional teams to enhance and refine application features.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c1/29/fd/c129fdfc-8994-eea3-e906-03532f99cfcb/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/460x0w.webp",
    technologies: ["Swift", "SwiftUI", "MVVM", "RxSwift"],
    appStore: "https://apps.apple.com/id/app/mytelkomsel/id651412430?l=id",
    github: ""
  },
  {
    title: "Build a OCTOMobile App ",
    description: "Contributed to the development of Octo Mobile for iOS by implementing VIPER architecture, integrating Restful APIs, and translating UI/UX designs into functional features using Swift. Managed dependencies with CocoaPods and utilized RXSwift for efficient asynchronous programming to deliver a high-performance and user-friendly digital banking application.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f0/55/76/f055765a-464c-d0ad-bd62-fe06852d00ee/AppIcon-0-0-1x_U007ephone-0-11-0-sRGB-85-220.png/460x0w.webp",
    technologies: ["Swift", "UIKit", "VIPER", "RxSwift"],
    appStore: "https://apps.apple.com/id/app/octo-mobile-by-cimb-niaga/id505917174",
    github: "https://github.com"
  },
  {
    title: "Build a BTNMobile App",
    description: "Contributed to the development of BTN Mobile App for iOS by implementing VIPER architecture, integrating Restful APIs, and translating UI/UX designs into functional features using Swift. Managed dependencies with CocoaPods and utilized RXSwift for efficient asynchronous programming to deliver a high-performance and user-friendly digital banking application.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9a/0d/a9/9a0da909-dcc4-76aa-18b6-8bb7aa916d0d/AppIcon-0-0-1x_U007emarketing-0-10-0-0-85-220.png/460x0w.webp",
    technologies: ["Swift", "UIKit", "VIPER", "RxSwift"],
    appStore: "https://apps.apple.com/id/app/btn-mobile/id6443466424",
    github: "https://github.com"
  }
];