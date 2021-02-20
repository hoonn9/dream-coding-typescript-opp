{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new Error("no network");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // login...
    }
  }

  class App {
    constructor(private userService: UserService) {}

    run() {
      try {
        this.userService.login();
      } catch (error) {
        // ex) dialog show
        // error 는 넘어올 때 any 타입
        // instanceof 를 사용할 수 없음
        // 이럴 땐 error state 사용
        if (error instanceof OfflineError) {
          //
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
