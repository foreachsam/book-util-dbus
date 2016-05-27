#!/usr/bin/env python3

import gi
gi.require_version('Gtk', '3.0')

from gi.repository import Gio, GLib

bus = Gio.bus_get_sync(Gio.BusType.SESSION, None)

rtn = bus.call_sync(
	bus_name = 'org.fcitx.Fcitx', 
	object_path = '/inputmethod', 
	interface_name = 'org.fcitx.Fcitx.InputMethod', 
	method_name = 'SetCurrentIM', 
	parameters = GLib.Variant('(s)', ('fcitx-keyboard-us',)), 
	reply_type = GLib.VariantType('()'), 
	flags = Gio.DBusCallFlags.NONE, 
	timeout_msec = -1, 
	cancellable = None
)

print(rtn.unpack())

	

