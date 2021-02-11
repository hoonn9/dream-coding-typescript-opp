{
  /**
   *  Union Types: OR
   */

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  //   type LoginResponse = "success" | "fail";

  //   function login(id: string, password: string): LoginResponse {
  //     if (id || password) {
  //       return "success";
  //     }
  //     return "fail";
  //   }

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state)
  // success

  function printLoginState(state: LoginState) {
    // X...
    if ("response" in state) {
      console.log(`success: ${state.response.body}`);
    } else {
      console.log(`fail: ${state.reason}`);
    }
  }
}
