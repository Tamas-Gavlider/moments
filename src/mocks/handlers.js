import { rest } from "msw";

const baseURL = "https://drf-api-react-4996193a1e99.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk : 59,
        username : "tamas",
        email : "",
        first_name : "",
        last_name: "",
        profile_id: 2,
        profile_image: "https://res.cloudinary.com/dfi7tw6ox/image/upload/v1/media/images/logo_azpxqi"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];