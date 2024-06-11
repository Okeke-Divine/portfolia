const { NextResponse } = require("next/server");

export function internalServerError(e) {
    return NextResponse.json({ message: "internalServerError", error: e }, { status: 500 })
}

export function badRequest(reason) {
    return NextResponse.json({ message: "internalServerError", reason: reason }, { status: 400 })
}

export function conflict(reason) {
    return NextResponse.json({ message: "internalServerError", reason: reason }, { status: 409 })
}