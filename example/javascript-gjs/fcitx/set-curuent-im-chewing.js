#!/usr/bin/env gjs

const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;


let bus = Gio.bus_get_sync(Gio.BusType.SESSION, null)
let rtn = bus.call_sync(
        'org.fcitx.Fcitx', //bus_name
        '/inputmethod', //object_path
        'org.fcitx.Fcitx.InputMethod', //interface_name
        'SetCurrentIM', //method_name
        GLib.Variant.new('(s)', ['chewing']), // parameters
        GLib.VariantType.new('()'), //reply_type
        Gio.DBusCallFlags.NONE, //flags
        -1, //timeout_msec
        null //cancellable
)

print(rtn.print(true));
//print(rtn.deep_unpack());
 



