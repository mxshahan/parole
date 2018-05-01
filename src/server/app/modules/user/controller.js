import { compareSync } from 'bcryptjs';
import { generateJwt } from '@utl';
import { userCrud } from './user.model';

let user;
let VerifyUser;
let userNew;
// const { 0: secret } = config.get('secret');
let token;

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
    user = await userCrud.single({
      qr: { _id: ctx.params.id },
      select: '-password'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      body: user
    };
  }
};

const myAccount = async (ctx) => {
  try {
    user = await userCrud.single({
      qr: { _id: ctx.state.user.uid }
    });
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = {
      data: {
        user
      },
      message: 'Your Accound Found...'
    };
  }
};

const userCreate = async (ctx) => {
  // console.log(ctx.request.body);
  try {
    userNew = await userCrud.create(ctx.request.body);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    token = await generateJwt({
      uid: userNew._id
    });
    ctx.body = {
      data: {
        acc_type: userNew.acc_type,
        token
      },
      message: 'SignUp Successfull...'
    };
  }
};

const userLogin = async (ctx) => {
  user = await userCrud.single({
    qr: { email: ctx.request.body.email }
  });
  try {
    if (user) {
      VerifyUser = await compareSync(ctx.request.body.password, user.password);
    }
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    if (VerifyUser) {
      token = await generateJwt({
        uid: user._id
      });
      ctx.body = {
        data: {
          acc_type: user.acc_type,
          token
        },
        message: 'Login Successfull...'
      };
    }
  }
};

const userUpdate = async (ctx) => {
  try {
    user = await userCrud.put({
      params: {
        qr: { _id: ctx.state.user.uid }
      },
      body: ctx.request.body
    });
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = {
      data: user,
      message: 'Your account successfully updated'
    };
  }
};

const userDelete = async (ctx) => {
  try {
    user = await userCrud.delete({
      params: {
        qr: { _id: ctx.state.user.uid }
      }
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      message: 'Your account successfully deleted'
    };
  }
};

export {
  userAll,
  userSingle,
  userCreate,
  userUpdate,
  userDelete,
  userLogin,
  myAccount
};
