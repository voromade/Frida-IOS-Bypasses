try {
  // let className = "JailMonkey";
  // let funcName = "isJailBroken";
  // let funcName = "jailBrokenMessage";

  let t = eval(ObjC.classes.JailMonkey["- isJailBroken"]);
  console.log(t.implementation);

  Interceptor.attach(t.implementation, {
    onLeave: function (retval) {
      console.log("Overriding...");
      console.log("[-] Return Value: " + retval);
      retval.replace(0x0);
    },
  });

  console.log("Successfully Initalized Jailbreak Bypass...");
} catch (err) {
  console.log("[!] Exception: " + err.message);
}
