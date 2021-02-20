{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type SuccessState = {
    result: "success";
  };

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      return {
        result: "fail",
        reason: "offline",
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      return this.client.tryConnect();
      // login...
    }
  }

  class App {
    constructor(private userService: UserService) {}

    run() {
      const status = this.userService.login();
      if (status.result === "fail") {
        if (status.reason === "offline") {
          // 에러처리
        }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();

  // 핸들링 할때 처리가 의미 있는 지 확인
}
