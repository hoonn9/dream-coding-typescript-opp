{
  /**
   *  discriminated
   *  공통된 prop 을 만들어서 구분
   */
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`success: ${state.response.body}`);
    } else {
      console.log(`fail: ${state.reason}`);
    }
  }
}
