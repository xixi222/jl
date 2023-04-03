import httpRequest from "./request/index.ts";

// 定义接口的传参
interface UserInfoParam {
	time: string;
	hello: number;
	practice: number;
	works: number;
	about: number;
}

// 获取用户信息
export function apiGetUserInfo(param: UserInfoParam) {
	return httpRequest({
		url: "your api url",
		method: "post",
		data: param,
	});
}
