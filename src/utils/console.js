export function _console_log(value) {
    const should_log = parseInt(process.env.NEXT_PUBLIC_ACTIVATE_LOG);
    if (should_log === 1) {
      return console.log(value);
    }
  }  