import { API, axiosInstance } from "../../src/services/api/api";
import { AuthApi } from "../../src/services/api/domains/auth";

describe("API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create axios instance with the expected base URL and headers", () => {
    expect(axiosInstance.defaults.baseURL).toBe(
      "https://artjoms-spole.fly.dev",
    );
    expect(axiosInstance.defaults.headers?.Accept).toBe("application/json");
    expect(axiosInstance.defaults.headers?.["Content-Type"]).toBe(
      "application/json",
    );
  });

  it("should call axiosInstance.post with correct arguments", async () => {
    const postSpy = jest
      .spyOn(axiosInstance, "post")
      .mockResolvedValue({ data: { success: true } } as any);

    const result = await API.post(
      "/test",
      { foo: "bar" },
      { Authorization: "token" },
    );

    expect(postSpy).toHaveBeenCalledWith(
      "/test",
      { foo: "bar" },
      { headers: { Authorization: "token" } },
    );
    expect(result).toEqual({ data: { success: true } });
  });

  it("should call axiosInstance.get with correct arguments", async () => {
    const getSpy = jest
      .spyOn(axiosInstance, "get")
      .mockResolvedValue({ data: { loaded: true } } as any);

    const result = await API.get("/test", { page: 1 });

    expect(getSpy).toHaveBeenCalledWith("/test", { params: { page: 1 } });
    expect(result).toEqual({ data: { loaded: true } });
  });

  it("should call axiosInstance.put with correct arguments", async () => {
    const putSpy = jest
      .spyOn(axiosInstance, "put")
      .mockResolvedValue({ data: { updated: true } } as any);

    const result = await API.put(
      "/test",
      { value: 42 },
      { Authorization: "token" },
    );

    expect(putSpy).toHaveBeenCalledWith(
      "/test",
      { value: 42 },
      { headers: { Authorization: "token" } },
    );
    expect(result).toEqual({ data: { updated: true } });
  });
});

describe("AuthApi", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call API.post for signup and return response data", async () => {
    const apiPostSpy = jest
      .spyOn(API, "post")
      .mockResolvedValue({ data: { id: 1, email: "test@example.com" } } as any);

    const params = {
      email: "test@example.com",
      password: "password",
      name: "Test User",
    };
    const result = await AuthApi.signUp(params, { Authorization: "token" });

    expect(apiPostSpy).toHaveBeenCalledWith("/signup", params, {
      Authorization: "token",
    });
    expect(result).toEqual({ id: 1, email: "test@example.com" });
  });
});
