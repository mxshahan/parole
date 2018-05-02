import { compareSync } from 'bcryptjs';
import { sign as jwtSign } from 'jsonwebtoken';
import config from 'config';
import { contentCrud } from './content.model';
import { userCrud } from '../user/user.model';


let content;
let contentNew;
let user;
let isMatched;
const { 0: secret } = config.get('secret');

const contentAll = async (ctx) => {
  try {
    content = await contentCrud.get();
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      body: {
        content
      }
    };
  }
};

const myContent = async (ctx) => {
  console.log(ctx.state.user.uid);
  try {
    content = await userCrud.single({
      qr: { _id: ctx.state.user.uid },
      select: 'contents',
      populate: 'contents'
    });
    console.log(content);
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      body: content
    };
  }
};

const userContent = async (ctx) => {
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

const contentSingle = async (ctx) => {
  try {
    content = await contentCrud.single({
      qr: { _id: ctx.params.id }
    });
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
    try {
      user = await userCrud.single({
        qr: { _id: ctx.state.user.uid }
      });
    } catch (e) {
      ctx.throw(422, e.message);
    } finally {
      user.contents.push(contentNew._id);
      user.save();
      ctx.body = {
        body: contentNew,
        message: 'Post is successful'
      };
    }
  }
};

const contentUpdate = async (ctx) => {
  try {
    user = await userCrud.single({
      qr: { _id: ctx.state.user.uid }
    });
    isMatched = user.contents.indexOf(ctx.params.id);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    if (isMatched !== -1) {
      try {
        content = await contentCrud.put({
          params: {
            qr: { _id: ctx.params.id }
          },
          body: ctx.request.body
        });
      } catch (e) {
        ctx.throw(422, e.message);
      } finally {
        ctx.body = {
          body: content,
          message: 'Post Updated..'
        };
      }
    } else {
      ctx.body = {
        message: 'Sorry you don\'t have right to edit this'
      };
    }
  }
};

const contentDelete = async (ctx) => {
  try {
    user = await userCrud.single({
      qr: { _id: ctx.state.user.uid }
    });
    isMatched = user.contents.indexOf(ctx.params.id);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    if (isMatched !== -1) {
      try {
        content = await contentCrud.delete({
          params: {
            qr: { _id: ctx.params.id }
          }
        });
      } catch (e) {
        ctx.throw(422, e.message);
      } finally {
        ctx.body = {
          body: content,
          message: 'Deleted'
        };
      }
    } else {
      ctx.body = {
        message: 'Sorry you don\'t have right to delete this'
      };
    }
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
  contentLocal,
  myContent,
  userContent
};
