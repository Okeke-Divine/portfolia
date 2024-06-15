import { _console_log } from "./console";

const { NextResponse } = require("next/server");

export function internalServerError(e) {
    _console_log(e);
    return NextResponse.json({ message: "internalServerError", error: "Internal Server Error" }, { status: 500 })
}

export function badRequest(reason) {
    _console_log(reason);
    return NextResponse.json({ message: "badRequest", reason: reason }, { status: 400 })
}

export function conflict(reason) {
    _console_log(reason);
    return NextResponse.json({ message: "conflict", reason: reason }, { status: 409 })
}

export function resourceCreated(data) {
    return NextResponse.json({ message: "success", data: data }, { status: 201 })
}

export function resourceUpdated(data) {
    return NextResponse.json({ message: "success", data: data }, { status: 200 })
}

export function resourceDeleted() {
    return NextResponse.json({ message: "success", data: {} }, { status: 200 })
}

export function resourceLoaded() {
    return NextResponse.json({ message: "success", data: skills }, { status: 200 })
}

export function unAuthorized() {
    return NextResponse.json({ message: "unAuthorized" }, { status: 401 })
}

export function accessDenied() {
    return NextResponse.json({ message: "accessDenied" }, { status: 403 })
}