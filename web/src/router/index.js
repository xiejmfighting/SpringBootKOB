import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/error/NotFound.vue'
import PkIndexView from '../views/pk/PkIndexView.vue'
import RanklistIndexView from '../views/ranklist/RanklistIndexView.vue'
import RecordIndexView from '../views/record/RecordIndexView.vue'
import UserBotIndexView from '../views/user/bot/UserBotIndexView.vue'
import UserAccountLoginView from '../views/user/account/UserAccountLoginView.vue';
import UserAccountRegisterView from '../views/user/account/UserAccountRegisterView.vue';
import store from '../store/index'

const routes = [
  {

    path: "/",
    name: "home",
    redirect: "/pk/",
    meta: {
      requestAuth: true,//存储页面是否需要授权
    }
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexView,
    meta: {
      requestAuth: true,//存储页面是否需要授权
    }
  },
  {
    path: "/404/",
    name: "404",
    component: NotFound,
    meta: {
      requestAuth: false,//存储页面是否需要授权
    }
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView,
    meta: {
      requestAuth: true,//存储页面是否需要授权
    }
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexView,
    meta: {
      requestAuth: true,//存储页面是否需要授权
    }
  },
  {
    path: "/user/bot/",
    name: "user_bot_index",
    component: UserBotIndexView,
    meta: {
      requestAuth: true,//存储页面是否需要授权
    }
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/",
    meta: {
      requestAuth: false,//存储页面是否需要授权
    }
  },
  {
    path: "/user/account/login",
    name: "user_account_login",
    component: UserAccountLoginView,
    meta: {
      requestAuth: false,//存储页面是否需要授权
    }
  },
  {
    path: "/user/account/register",
    name: "user_account_register",
    component: UserAccountRegisterView,
    meta: {
      requestAuth: false,//存储页面是否需要授权
    }
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// to表示要跳转到哪个页面，from表示从那个页面开始跳转，
// next表示页面要不要执行下一步操作

router.beforeEach((to, from, next) => {
  if (to.meta.requestAuth && !store.state.user.is_login) {
    next({ name: "user_account_login" });
  } else {
    next();
  }

})

export default router
