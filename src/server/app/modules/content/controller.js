import { compareSync } from 'bcryptjs';
import { sign as jwtSign } from 'jsonwebtoken';
import config from 'config';
import { contentCrud } from './content.model';


let content;
let contentNew;
const { 0: secret } = config.get('secret');

const contentAll = async (ctx) => {
  try {
    // contents = await contentCrud.get();
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

const contentSingle = async (ctx) => {
  try {
    content = await contentCrud.single({ _id: ctx.params.id });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      body: content
    };
  }
};

const contentCreate = async (ctx) => {
  try {
    contentNew = await contentCrud.create(ctx.request.body);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = {
      body: contentNew
    };
  }
};

const contentUpdate = async (ctx) => {
  try {
    content = await contentCrud.put({
      params: {
        _id: ctx.params.id
      },
      body: ctx.request.body
    });
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = {
      body: content
    };
  }
};

const contentDelete = async (ctx) => {
  try {
    content = await contentCrud.delete({ _id: ctx.params.id });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      body: content
    };
  }
};

const contentLocal = async (ctx) => {
  const {
    contentname,
    password,
    email,
    signup
  } = ctx.request.body;
  content = await contentCrud.single({
    $or: [{
      contentname
    }, {
      email: contentname
    }]
  });
  if (signup && !content) {
    try {
      content = await contentCrud.create({
        contentname,
        password,
        email
      });
    } catch (e) {
      ctx.throw(422, e.message);
    }
  } else if (signup && content) {
    ctx.throw(409, { message: 'Email or contentname already registered!!' });
  } else if (!content) {
    ctx.throw(401, { message: 'No content found' });
  } else if (content && !compareSync(password, content.password)) {
    ctx.throw(401, { message: 'Password given is wrong' });
  }
  const token = jwtSign({
    data: {
      uid: content._id,
      acc_type: content.acc_type
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
  contentAll,
  contentSingle,
  contentCreate,
  contentUpdate,
  contentDelete,
  contentLocal
};
