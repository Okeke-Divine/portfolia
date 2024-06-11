const { NextResponse } = require("next/server");

export function internalServerError(e) {
    return NextResponse.json({ message: "internalServerError", error: e }, { status: 500 })
}

export function badRequest(reason) {
    return NextResponse.json({ message: "badRequest", reason: reason }, { status: 400 })
}

export function conflict(reason) {
    return NextResponse.json({ message: "conflict", reason: reason }, { status: 409 })
}

export function resourceCreated(data) {
    return NextResponse.json({ message: "success", data: data }, { status: 201 })
}