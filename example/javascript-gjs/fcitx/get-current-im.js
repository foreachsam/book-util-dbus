#!/usr/bin/env gjs

const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;


let bus = Gio.bus_get_sync(Gio.BusType.SESSION, null)
let rtn = bus.call_sync(
        'org.fcitx.Fcitx', //bus_name
        '/inputmethod', //object_path
        'org.fcitx.Fcitx.InputMethod', //interface_name
        'GetCurrentIM', //method_name
        null, // parameters
        GLib.VariantType.new('(s)'), //reply_type
        Gio.DBusCallFlags.NONE, //flags
        -1, //timeout_msec
        null //cancellable
)

//print(rtn.print(true));
print(rtn.deep_unpack()[0]);
 



