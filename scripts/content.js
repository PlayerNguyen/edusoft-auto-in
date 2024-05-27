function autoFill() {
  const captchaElement = document.querySelector(
    "#ContentPlaceHolder1_ctl00_lblCapcha"
  );
  const captchaInputElement = document.querySelector(
    "input[name='ctl00$ContentPlaceHolder1$ctl00$txtCaptcha'"
  );
  const captchaInputButton = document.querySelector(
    "#ContentPlaceHolder1_ctl00_btnXacNhan"
  );

  // If have no element, it is mean we are already in
  if (captchaElement === null || captchaInputElement === null) {
    console.warn(
      "There are no captcha input element. The system might be detected as already in."
    );
    return;
  }
  const captchaValue = captchaElement.textContent;
  captchaInputElement.value = captchaValue;
  captchaInputButton.click();
}

(async () => {
  autoFill();
})();
