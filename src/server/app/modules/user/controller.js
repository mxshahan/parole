import { compareSync } from 'bcryptjs';
import { sign as jwtSign } from 'jsonwebtoken';
import config from 'config';
import { userCrud } from './user.model';


let users;
let user;
let userNew;
const { 0: secret } = config.get('secret');

const userAll = async (ctx) => {
  try {
    // users = await userCrud.get();
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      body: {
        name: 'Shahan',
        age: 24,
        color: 'Brown'
      }
    };
  }
};

const userSingle = async (ctx) => {
  try {
    user = await userCrud.single({ _id: ctx.params.id });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      body: user
    };
  }
};

const userCreate = async (ctx) => {
  try {
    userNew = await userCrud.create(ctx.request.body);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = {
      body: userNew
    };
  }
};

const userUpdate = async (ctx) => {
  try {
    user = await userCrud.put({
      params: {
        _id: ctx.params.id
      },
      body: ctx.request.body
    });
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = {
      body: user
    };
  }
};

const userDelete = async (ctx) => {
  try {
    user = await userCrud.delete({ _id: ctx.params.id });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      body: user
    };
  }
};

const userLocal = async (ctx) => {
  const {
    username,
    password,
    email,
    signup
  } = ctx.request.body;
  user = await userCrud.single({
    $or: [{
      username
    }, {
      email: username
    }]
  });
  if (signup && !user) {
    try {
      user = await userCrud.create({
        username,
        password,
        email
      });
    } catch (e) {
      ctx.throw(422, e.message);
    }
  } else if (signup && user) {
    ctx.throw(409, { message: 'Email or username already registered!!' });
  } else if (!user) {
    ctx.throw(401, { message: 'No user found' });
  } else if (user && !compareSync(password, user.password)) {
    ctx.throw(401, { message: 'Password given is wrong' });
  }
  const token = jwtSign({
    data: {
      uid: user._id,
      acc_type: user.acc_type
    },
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 21600
  }, secret);
  ctx.session.token = token;
  ctx.body = {
    data: {
      token
    },
    message: 'Loggedin successfully'
  };
};

export {
  userAll,
  userSingle,
  userCreate,
  userUpdate,
  userDelete,
  userLocal
};
