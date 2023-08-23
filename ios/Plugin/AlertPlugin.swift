import Foundation

@objc public class AlertPlugin: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
  @objc public func showAlert(_ title: String, message : String){
      print(title)
    }
}
