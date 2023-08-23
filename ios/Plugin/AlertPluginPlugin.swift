import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(AlertPluginPlugin)
public class AlertPluginPlugin: CAPPlugin {
  private let implementation = AlertPlugin()
  
  @objc func echo(_ call: CAPPluginCall) {
    let value = call.getString("value") ?? ""
    call.resolve([
      "value": implementation.echo(value)
    ])
  }
  @objc func showAlert(_ call: CAPPluginCall) {
    let alert = call.showAlert("Capacitor 🚀", message: "Welcome Sanjay!")
    call.resolve()
  }
}
