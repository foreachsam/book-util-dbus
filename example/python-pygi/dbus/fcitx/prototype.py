
rtn = bus.call_sync(
	bus_name:str=None, 
	object_path:str, 
	interface_name:str, 
	method_name:str, 
	parameters:GLib.Variant=None, 
	reply_type:GLib.VariantType=None, 
	flags:Gio.DBusCallFlags, 
	timeout_msec:int, 
	cancellable:Gio.Cancellable=None
)

