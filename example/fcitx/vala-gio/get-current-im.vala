using GLib;

class App {
    public static int main(string[] args) {
	try {
		DBusConnection bus = Bus.get_sync(BusType.SESSION);
		Variant rtn = bus.call_sync(
			"org.fcitx.Fcitx", //bus_name
			"/inputmethod", //object_path
			"org.fcitx.Fcitx.InputMethod", //interface_name
			"GetCurrentIM", //method_name
			null, // parameters
			new VariantType("(s)"), //reply_type
			DBusCallFlags.NONE, //flags
			-1, //timeout_msec
			null //cancellable
		);
		
		stdout.printf("%s\n", rtn.print(true));	
		
		//http://www.valadoc.org/#!api=glib-2.0/GLib.Variant
		/*
		string? val = null;
		VariantIter iter = rtn.iterator();
		iter.next("s", &val);
		stdout.printf("%s\n", val);
		*/

	} catch (IOError e) {
		warning ("Error with DBus: %s", e.message);
	} catch (Error e) {
		warning ("Error : %s", e.message);
	}
        return 0;
    }
}

