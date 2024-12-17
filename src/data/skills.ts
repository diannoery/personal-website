export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Languages & Frameworks",
    items: ["Swift", "SwiftUI", "UIKit", "Objective-C"]
  },
  {
    category: "Apple Frameworks",
    items: ["Core Data", "CloudKit", "HealthKit", "MapKit", "Core Location"]
  },
  {
    category: "Tools & Practices",
    items: ["Xcode", "Git", "CI/CD", "REST APIs"]
  },
  {
    category: "Architecture",
    items: ["MVVM", "Clean Architecture", "VIPER", "Reactive Programming"]
  }
];