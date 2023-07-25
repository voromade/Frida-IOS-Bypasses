console.log("[*] Started: Find All Methods of a Specific Class");
if (ObjC.available) {
  try {
    // Class name here
    // let className = "JailMonkey";
    let className = "boringssl_concrete_boringssl_handshake_callback_status";
    let methods = eval("ObjC.classes." + className + ".$methods");
    for (let i = 0; i < methods.length; i++) {
      try {
        console.log("[-] " + methods[i]);
      } catch (err) {
        console.log("[!] Exception1: " + err.message);
      }
    }
  } catch (err) {
    console.log("[!] Exception2: " + err.message);
  }
} else {
  console.log("Objective-C Runtime is not available!");
}
console.log("[*] Completed: Find All Methods of a Specific Class");
