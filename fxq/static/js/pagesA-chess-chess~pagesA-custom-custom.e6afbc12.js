(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-chess-chess~pagesA-custom-custom"],
  {
    "02b1": function (t, e, n) {
      "use strict";
      var i = n("6125"),
        o = n.n(i);
      o.a;
    },
    "04f0": function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("4ea4").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = i(n("8daa")),
        r = i(n("5f06")),
        a = {
          name: "u--text",
          mixins: [uni.$u.mpMixin, r.default, uni.$u.mixin],
          components: { uvText: o.default },
        };
      e.default = a;
    },
    "09bd": function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = {
        props: {
          lang: String,
          sessionFrom: String,
          sendMessageTitle: String,
          sendMessagePath: String,
          sendMessageImg: String,
          showMessageCard: Boolean,
          appParameter: String,
          formType: String,
          openType: String,
        },
      };
      e.default = i;
    },
    "0d91": function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("4ea4").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = i(n("3b25")),
        r = {
          name: "u-link",
          mixins: [uni.$u.mpMixin, uni.$u.mixin, o.default],
          computed: {
            linkStyle: function () {
              var t = {
                color: this.color,
                fontSize: uni.$u.addUnit(this.fontSize),
                lineHeight: uni.$u.addUnit(uni.$u.getPx(this.fontSize) + 2),
                textDecoration: this.underLine ? "underline" : "none",
              };
              return t;
            },
          },
          methods: {
            openLink: function () {
              window.open(this.href), this.$emit("click");
            },
          },
        };
      e.default = r;
    },
    "0dd0": function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("ac1f"),
        n("00b4"),
        n("99af");
      var i = {
        computed: {
          value: function () {
            var t = this.text,
              e = this.mode,
              n = this.format,
              i = this.href;
            return "price" === e
              ? (/^\d+(\.\d+)?$/.test(t) ||
                  uni.$u.error("金额模式下，text参数需要为金额格式"),
                uni.$u.test.func(n) ? n(t) : uni.$u.priceFormat(t, 2))
              : "date" === e
              ? (!uni.$u.test.date(t) &&
                  uni.$u.error("日期模式下，text参数需要为日期或时间戳格式"),
                uni.$u.test.func(n)
                  ? n(t)
                  : n
                  ? uni.$u.timeFormat(t, n)
                  : uni.$u.timeFormat(t, "yyyy-mm-dd"))
              : "phone" === e
              ? uni.$u.test.func(n)
                ? n(t)
                : "encrypt" === n
                ? "".concat(t.substr(0, 3), "****").concat(t.substr(7))
                : t
              : "name" === e
              ? ("string" !== typeof t &&
                  uni.$u.error("姓名模式下，text参数需要为字符串格式"),
                uni.$u.test.func(n)
                  ? n(t)
                  : "encrypt" === n
                  ? this.formatName(t)
                  : t)
              : "link" === e
              ? (!uni.$u.test.url(i) &&
                  uni.$u.error("超链接模式下，href参数需要为URL格式"),
                t)
              : t;
          },
        },
        methods: {
          formatName: function (t) {
            var e = "";
            if (2 === t.length) e = t.substr(0, 1) + "*";
            else if (t.length > 2) {
              for (var n = "", i = 0, o = t.length - 2; i < o; i++) n += "*";
              e = t.substr(0, 1) + n + t.substr(-1, 1);
            } else e = t;
            return e;
          },
        },
      };
      e.default = i;
    },
    2232: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("04f0"),
        o = n.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = o.a;
    },
    "27d0": function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("a9e3");
      var i = {
        props: {
          hairline: { type: Boolean, default: uni.$u.props.button.hairline },
          type: { type: String, default: uni.$u.props.button.type },
          size: { type: String, default: uni.$u.props.button.size },
          shape: { type: String, default: uni.$u.props.button.shape },
          plain: { type: Boolean, default: uni.$u.props.button.plain },
          disabled: { type: Boolean, default: uni.$u.props.button.disabled },
          loading: { type: Boolean, default: uni.$u.props.button.loading },
          loadingText: {
            type: [String, Number],
            default: uni.$u.props.button.loadingText,
          },
          loadingMode: {
            type: String,
            default: uni.$u.props.button.loadingMode,
          },
          loadingSize: {
            type: [String, Number],
            default: uni.$u.props.button.loadingSize,
          },
          openType: { type: String, default: uni.$u.props.button.openType },
          formType: { type: String, default: uni.$u.props.button.formType },
          appParameter: {
            type: String,
            default: uni.$u.props.button.appParameter,
          },
          hoverStopPropagation: {
            type: Boolean,
            default: uni.$u.props.button.hoverStopPropagation,
          },
          lang: { type: String, default: uni.$u.props.button.lang },
          sessionFrom: {
            type: String,
            default: uni.$u.props.button.sessionFrom,
          },
          sendMessageTitle: {
            type: String,
            default: uni.$u.props.button.sendMessageTitle,
          },
          sendMessagePath: {
            type: String,
            default: uni.$u.props.button.sendMessagePath,
          },
          sendMessageImg: {
            type: String,
            default: uni.$u.props.button.sendMessageImg,
          },
          showMessageCard: {
            type: Boolean,
            default: uni.$u.props.button.showMessageCard,
          },
          dataName: { type: String, default: uni.$u.props.button.dataName },
          throttleTime: {
            type: [String, Number],
            default: uni.$u.props.button.throttleTime,
          },
          hoverStartTime: {
            type: [String, Number],
            default: uni.$u.props.button.hoverStartTime,
          },
          hoverStayTime: {
            type: [String, Number],
            default: uni.$u.props.button.hoverStayTime,
          },
          text: { type: [String, Number], default: uni.$u.props.button.text },
          icon: { type: String, default: uni.$u.props.button.icon },
          iconColor: { type: String, default: uni.$u.props.button.icon },
          color: { type: String, default: uni.$u.props.button.color },
        },
      };
      e.default = i;
    },
    "2f3b": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("uvText", {
            attrs: {
              type: t.type,
              show: t.show,
              text: t.text,
              prefixIcon: t.prefixIcon,
              suffixIcon: t.suffixIcon,
              mode: t.mode,
              href: t.href,
              format: t.format,
              call: t.call,
              openType: t.openType,
              bold: t.bold,
              block: t.block,
              lines: t.lines,
              color: t.color,
              decoration: t.decoration,
              size: t.size,
              iconStyle: t.iconStyle,
              margin: t.margin,
              lineHeight: t.lineHeight,
              align: t.align,
              wordWrap: t.wordWrap,
              customStyle: t.customStyle,
            },
            on: {
              click: function (e) {
                (arguments[0] = e = t.$handleEvent(e)), t.$emit("click");
              },
            },
          });
        },
        o = [];
    },
    "31d9": function (t, e, n) {
      var i = n("7184");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var o = n("4f06").default;
      o("21f832f8", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "35ff": function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-7323bf5d], uni-scroll-view[data-v-7323bf5d], uni-swiper-item[data-v-7323bf5d]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-button[data-v-7323bf5d]{width:100%}.u-button__text[data-v-7323bf5d]{white-space:nowrap;line-height:1}.u-button[data-v-7323bf5d]:before{position:absolute;top:50%;left:50%;width:100%;height:100%;border:inherit;border-radius:inherit;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0;content:" ";background-color:#000;border-color:#000}.u-button--active[data-v-7323bf5d]:before{opacity:.15}.u-button__icon + .u-button__text[data-v-7323bf5d]:not(:empty), .u-button__loading-text[data-v-7323bf5d]{margin-left:4px}.u-button--plain.u-button--primary[data-v-7323bf5d]{color:#3c9cff}.u-button--plain.u-button--info[data-v-7323bf5d]{color:#909399}.u-button--plain.u-button--success[data-v-7323bf5d]{color:#5ac725}.u-button--plain.u-button--error[data-v-7323bf5d]{color:#f56c6c}.u-button--plain.u-button--warning[data-v-7323bf5d]{color:#f56c6c}.u-button[data-v-7323bf5d]{height:40px;position:relative;align-items:center;justify-content:center;display:flex;flex-direction:row;box-sizing:border-box;flex-direction:row}.u-button__text[data-v-7323bf5d]{font-size:15px}.u-button__loading-text[data-v-7323bf5d]{font-size:15px;margin-left:4px}.u-button--large[data-v-7323bf5d]{width:100%;height:50px;padding:0 15px}.u-button--normal[data-v-7323bf5d]{padding:0 12px;font-size:14px}.u-button--small[data-v-7323bf5d]{min-width:60px;height:30px;padding:0 8px;font-size:12px}.u-button--mini[data-v-7323bf5d]{height:22px;font-size:10px;min-width:50px;padding:0 8px}.u-button--disabled[data-v-7323bf5d]{opacity:.5}.u-button--info[data-v-7323bf5d]{color:#323233;background-color:#fff;border-color:#ebedf0;border-width:1px;border-style:solid}.u-button--success[data-v-7323bf5d]{color:#fff;background-color:#5ac725;border-color:#5ac725;border-width:1px;border-style:solid}.u-button--primary[data-v-7323bf5d]{color:#fff;background-color:#3c9cff;border-color:#3c9cff;border-width:1px;border-style:solid}.u-button--error[data-v-7323bf5d]{color:#fff;background-color:#f56c6c;border-color:#f56c6c;border-width:1px;border-style:solid}.u-button--warning[data-v-7323bf5d]{color:#fff;background-color:#f9ae3d;border-color:#f9ae3d;border-width:1px;border-style:solid}.u-button--block[data-v-7323bf5d]{display:flex;flex-direction:row;width:100%}.u-button--circle[data-v-7323bf5d]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px}.u-button--square[data-v-7323bf5d]{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px}.u-button__icon[data-v-7323bf5d]{min-width:1em;line-height:inherit!important;vertical-align:top}.u-button--plain[data-v-7323bf5d]{background-color:#fff}.u-button--hairline[data-v-7323bf5d]{border-width:.5px!important}',
          "",
        ]),
        (t.exports = e);
    },
    "3b25": function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("a9e3");
      var i = {
        props: {
          color: { type: String, default: uni.$u.props.link.color },
          fontSize: {
            type: [String, Number],
            default: uni.$u.props.link.fontSize,
          },
          underLine: { type: Boolean, default: uni.$u.props.link.underLine },
          href: { type: String, default: uni.$u.props.link.href },
          mpTips: { type: String, default: uni.$u.props.link.mpTips },
          lineColor: { type: String, default: uni.$u.props.link.lineColor },
          text: { type: String, default: uni.$u.props.link.text },
        },
      };
      e.default = i;
    },
    "42c7": function (t, e, n) {
      var i = n("d1ab");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var o = n("4f06").default;
      o("398ccb68", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "4dd3": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("2f3b"),
        o = n("2232");
      for (var r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(r);
      var a = n("f0c5"),
        u = Object(a["a"])(
          o["default"],
          i["b"],
          i["c"],
          !1,
          null,
          null,
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = u.exports;
    },
    "540c": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-text",
            {
              staticClass: "u-link",
              style: [t.linkStyle, t.$u.addStyle(t.customStyle)],
              on: {
                click: function (e) {
                  e.stopPropagation(),
                    (arguments[0] = e = t.$handleEvent(e)),
                    t.openLink.apply(void 0, arguments);
                },
              },
            },
            [t._v(t._s(t.text))]
          );
        },
        o = [];
    },
    "5f06": function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("a9e3");
      var i = {
        props: {
          type: { type: String, default: uni.$u.props.text.type },
          show: { type: Boolean, default: uni.$u.props.text.show },
          text: { type: [String, Number], default: uni.$u.props.text.text },
          prefixIcon: { type: String, default: uni.$u.props.text.prefixIcon },
          suffixIcon: { type: String, default: uni.$u.props.text.suffixIcon },
          mode: { type: String, default: uni.$u.props.text.mode },
          href: { type: String, default: uni.$u.props.text.href },
          format: {
            type: [String, Function],
            default: uni.$u.props.text.format,
          },
          call: { type: Boolean, default: uni.$u.props.text.call },
          openType: { type: String, default: uni.$u.props.text.openType },
          bold: { type: Boolean, default: uni.$u.props.text.bold },
          block: { type: Boolean, default: uni.$u.props.text.block },
          lines: { type: [String, Number], default: uni.$u.props.text.lines },
          color: { type: String, default: uni.$u.props.text.color },
          size: { type: [String, Number], default: uni.$u.props.text.size },
          iconStyle: {
            type: [Object, String],
            default: uni.$u.props.text.iconStyle,
          },
          decoration: { type: String, default: uni.$u.props.text.decoration },
          margin: {
            type: [Object, String, Number],
            default: uni.$u.props.text.margin,
          },
          lineHeight: {
            type: [String, Number],
            default: uni.$u.props.text.lineHeight,
          },
          align: { type: String, default: uni.$u.props.text.align },
          wordWrap: { type: String, default: uni.$u.props.text.wordWrap },
        },
      };
      e.default = i;
    },
    6125: function (t, e, n) {
      var i = n("35ff");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var o = n("4f06").default;
      o("4967696a", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    7184: function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-ed1d90b6], uni-scroll-view[data-v-ed1d90b6], uni-swiper-item[data-v-ed1d90b6]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-text[data-v-ed1d90b6]{display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;flex:1;width:100%}.u-text__price[data-v-ed1d90b6]{font-size:14px;color:#606266}.u-text__value[data-v-ed1d90b6]{font-size:14px;display:flex;flex-direction:row;color:#606266;flex-wrap:wrap;text-overflow:ellipsis;align-items:center}.u-text__value--primary[data-v-ed1d90b6]{color:#3c9cff}.u-text__value--warning[data-v-ed1d90b6]{color:#f9ae3d}.u-text__value--success[data-v-ed1d90b6]{color:#5ac725}.u-text__value--info[data-v-ed1d90b6]{color:#909399}.u-text__value--error[data-v-ed1d90b6]{color:#f56c6c}.u-text__value--main[data-v-ed1d90b6]{color:#303133}.u-text__value--content[data-v-ed1d90b6]{color:#606266}.u-text__value--tips[data-v-ed1d90b6]{color:#909193}.u-text__value--light[data-v-ed1d90b6]{color:#c0c4cc}',
          "",
        ]),
        (t.exports = e);
    },
    "75c5": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {
          return i;
        });
      var i = { uLoadingIcon: n("cf6a").default, uIcon: n("a6a2").default },
        o = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-button",
            {
              staticClass: "u-button u-reset-button",
              class: t.bemClass,
              style: [t.baseColor, t.$u.addStyle(t.customStyle)],
              attrs: {
                "hover-start-time": Number(t.hoverStartTime),
                "hover-stay-time": Number(t.hoverStayTime),
                "form-type": t.formType,
                "open-type": t.openType,
                "app-parameter": t.appParameter,
                "hover-stop-propagation": t.hoverStopPropagation,
                "send-message-title": t.sendMessageTitle,
                "send-message-path": t.sendMessagePath,
                lang: t.lang,
                "data-name": t.dataName,
                "session-from": t.sessionFrom,
                "send-message-img": t.sendMessageImg,
                "show-message-card": t.showMessageCard,
                "hover-class":
                  t.disabled || t.loading ? "" : "u-button--active",
              },
              on: {
                getphonenumber: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.getphonenumber.apply(void 0, arguments);
                },
                getuserinfo: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.getuserinfo.apply(void 0, arguments);
                },
                error: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.error.apply(void 0, arguments);
                },
                opensetting: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.opensetting.apply(void 0, arguments);
                },
                launchapp: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.launchapp.apply(void 0, arguments);
                },
                click: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.clickHandler.apply(void 0, arguments);
                },
              },
            },
            [
              t.loading
                ? [
                    n("u-loading-icon", {
                      attrs: {
                        mode: t.loadingMode,
                        size: 1.15 * t.loadingSize,
                        color: t.loadingColor,
                      },
                    }),
                    n(
                      "v-uni-text",
                      {
                        staticClass: "u-button__loading-text",
                        style: [{ fontSize: t.textSize + "px" }],
                      },
                      [t._v(t._s(t.loadingText || t.text))]
                    ),
                  ]
                : [
                    t.icon
                      ? n("u-icon", {
                          attrs: {
                            name: t.icon,
                            color: t.iconColorCom,
                            size: 1.35 * t.textSize,
                            customStyle: { marginRight: "2px" },
                          },
                        })
                      : t._e(),
                    t._t("default", [
                      n(
                        "v-uni-text",
                        {
                          staticClass: "u-button__text",
                          style: [{ fontSize: t.textSize + "px" }],
                        },
                        [t._v(t._s(t.text))]
                      ),
                    ]),
                  ],
            ],
            2
          );
        },
        r = [];
    },
    "836d": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("ae64"),
        o = n.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = o.a;
    },
    8889: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("540c"),
        o = n("b307");
      for (var r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(r);
      n("c191");
      var a = n("f0c5"),
        u = Object(a["a"])(
          o["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "2b5fb029",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = u.exports;
    },
    "8daa": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("e583"),
        o = n("836d");
      for (var r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(r);
      n("c73d");
      var a = n("f0c5"),
        u = Object(a["a"])(
          o["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "ed1d90b6",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = u.exports;
    },
    ae64: function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("4ea4").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = i(n("0dd0")),
        r = (i(n("09bd")), i(n("cd4c")), i(n("5f06"))),
        a = {
          name: "u--text",
          mixins: [uni.$u.mpMixin, uni.$u.mixin, o.default, r.default],
          computed: {
            valueStyle: function () {
              var t = {
                textDecoration: this.decoration,
                fontWeight: this.bold ? "bold" : "normal",
                wordWrap: this.wordWrap,
                fontSize: uni.$u.addUnit(this.size),
              };
              return (
                !this.type && (t.color = this.color),
                this.isNvue && this.lines && (t.lines = this.lines),
                this.lineHeight &&
                  (t.lineHeight = uni.$u.addUnit(this.lineHeight)),
                !this.isNvue && this.block && (t.display = "block"),
                uni.$u.deepMerge(t, uni.$u.addStyle(this.customStyle))
              );
            },
            isNvue: function () {
              return !1;
            },
            isMp: function () {
              return !1;
            },
          },
          data: function () {
            return {};
          },
          methods: {
            clickHandler: function () {
              this.call &&
                "phone" === this.mode &&
                uni.makePhoneCall({ phoneNumber: this.text }),
                this.$emit("click");
            },
          },
        };
      e.default = a;
    },
    b307: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("0d91"),
        o = n.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = o.a;
    },
    c191: function (t, e, n) {
      "use strict";
      var i = n("42c7"),
        o = n.n(i);
      o.a;
    },
    c73d: function (t, e, n) {
      "use strict";
      var i = n("31d9"),
        o = n.n(i);
      o.a;
    },
    cd4c: function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = {
        props: { openType: String },
        methods: {
          onGetUserInfo: function (t) {
            this.$emit("getuserinfo", t.detail);
          },
          onContact: function (t) {
            this.$emit("contact", t.detail);
          },
          onGetPhoneNumber: function (t) {
            this.$emit("getphonenumber", t.detail);
          },
          onError: function (t) {
            this.$emit("error", t.detail);
          },
          onLaunchApp: function (t) {
            this.$emit("launchapp", t.detail);
          },
          onOpenSetting: function (t) {
            this.$emit("opensetting", t.detail);
          },
        },
      };
      e.default = i;
    },
    d1ab: function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-2b5fb029], uni-scroll-view[data-v-2b5fb029], uni-swiper-item[data-v-2b5fb029]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-link[data-v-2b5fb029]{line-height:1;display:flex;flex-direction:row;flex-wrap:wrap;flex:1}',
          "",
        ]),
        (t.exports = e);
    },
    d67e: function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("4ea4").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("c975");
      i(n("09bd")), i(n("cd4c"));
      var o = i(n("27d0")),
        r = {
          name: "u-button",
          mixins: [uni.$u.mpMixin, uni.$u.mixin, o.default],
          data: function () {
            return {};
          },
          computed: {
            bemClass: function () {
              return this.color
                ? this.bem(
                    "button",
                    ["shape", "size"],
                    ["disabled", "plain", "hairline"]
                  )
                : this.bem(
                    "button",
                    ["type", "shape", "size"],
                    ["disabled", "plain", "hairline"]
                  );
            },
            loadingColor: function () {
              return this.plain
                ? this.color
                  ? this.color
                  : uni.$u.config.color["u-".concat(this.type)]
                : "info" === this.type
                ? "#c9c9c9"
                : "rgb(200, 200, 200)";
            },
            iconColorCom: function () {
              return this.iconColor
                ? this.iconColor
                : this.plain
                ? this.color
                  ? this.color
                  : this.type
                : "info" === this.type
                ? "#000000"
                : "#ffffff";
            },
            baseColor: function () {
              var t = {};
              return (
                this.color &&
                  ((t.color = this.plain ? this.color : "white"),
                  this.plain || (t["background-color"] = this.color),
                  -1 !== this.color.indexOf("gradient")
                    ? ((t.borderTopWidth = 0),
                      (t.borderRightWidth = 0),
                      (t.borderBottomWidth = 0),
                      (t.borderLeftWidth = 0),
                      this.plain || (t.backgroundImage = this.color))
                    : ((t.borderColor = this.color),
                      (t.borderWidth = "1px"),
                      (t.borderStyle = "solid"))),
                t
              );
            },
            nvueTextStyle: function () {
              var t = {};
              return (
                "info" === this.type && (t.color = "#323233"),
                this.color && (t.color = this.plain ? this.color : "white"),
                (t.fontSize = this.textSize + "px"),
                t
              );
            },
            textSize: function () {
              var t = 14,
                e = this.size;
              return (
                "large" === e && (t = 16),
                "normal" === e && (t = 14),
                "small" === e && (t = 12),
                "mini" === e && (t = 10),
                t
              );
            },
          },
          methods: {
            clickHandler: function () {
              var t = this;
              this.disabled ||
                this.loading ||
                uni.$u.throttle(function () {
                  t.$emit("click");
                }, this.throttleTime);
            },
            getphonenumber: function (t) {
              this.$emit("getphonenumber", t);
            },
            getuserinfo: function (t) {
              this.$emit("getuserinfo", t);
            },
            error: function (t) {
              this.$emit("error", t);
            },
            opensetting: function (t) {
              this.$emit("opensetting", t);
            },
            launchapp: function (t) {
              this.$emit("launchapp", t);
            },
          },
        };
      e.default = r;
    },
    e583: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {
          return i;
        });
      var i = { uIcon: n("a6a2").default, uLink: n("8889").default },
        o = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return t.show
            ? n(
                "v-uni-view",
                {
                  staticClass: "u-text",
                  class: [],
                  style: {
                    margin: t.margin,
                    justifyContent:
                      "left" === t.align
                        ? "flex-start"
                        : "center" === t.align
                        ? "center"
                        : "flex-end",
                  },
                  on: {
                    click: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.clickHandler.apply(void 0, arguments);
                    },
                  },
                },
                [
                  "price" === t.mode
                    ? n(
                        "v-uni-text",
                        {
                          class: [
                            "u-text__price",
                            t.type && "u-text__value--" + t.type,
                          ],
                          style: [t.valueStyle],
                        },
                        [t._v("￥")]
                      )
                    : t._e(),
                  t.prefixIcon
                    ? n(
                        "v-uni-view",
                        { staticClass: "u-text__prefix-icon" },
                        [
                          n("u-icon", {
                            attrs: {
                              name: t.prefixIcon,
                              customStyle: t.$u.addStyle(t.iconStyle),
                            },
                          }),
                        ],
                        1
                      )
                    : t._e(),
                  "link" === t.mode
                    ? n("u-link", {
                        attrs: { text: t.value, href: t.href, underLine: !0 },
                      })
                    : t.openType && t.isMp
                    ? [
                        n(
                          "v-uni-button",
                          {
                            staticClass: "u-reset-button u-text__value",
                            style: [t.valueStyle],
                            attrs: {
                              "data-index": t.index,
                              openType: t.openType,
                              lang: t.lang,
                              "session-from": t.sessionFrom,
                              "send-message-title": t.sendMessageTitle,
                              "send-message-path": t.sendMessagePath,
                              "send-message-img": t.sendMessageImg,
                              "show-message-card": t.showMessageCard,
                              "app-parameter": t.appParameter,
                            },
                            on: {
                              getuserinfo: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.onGetUserInfo.apply(void 0, arguments);
                              },
                              contact: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.onContact.apply(void 0, arguments);
                              },
                              getphonenumber: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.onGetPhoneNumber.apply(void 0, arguments);
                              },
                              error: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.onError.apply(void 0, arguments);
                              },
                              launchapp: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.onLaunchApp.apply(void 0, arguments);
                              },
                              opensetting: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.onOpenSetting.apply(void 0, arguments);
                              },
                            },
                          },
                          [t._v(t._s(t.value))]
                        ),
                      ]
                    : n(
                        "v-uni-text",
                        {
                          staticClass: "u-text__value",
                          class: [
                            t.type && "u-text__value--" + t.type,
                            t.lines && "u-line-" + t.lines,
                          ],
                          style: [t.valueStyle],
                        },
                        [t._v(t._s(t.value))]
                      ),
                  t.suffixIcon
                    ? n(
                        "v-uni-view",
                        { staticClass: "u-text__suffix-icon" },
                        [
                          n("u-icon", {
                            attrs: {
                              name: t.suffixIcon,
                              customStyle: t.$u.addStyle(t.iconStyle),
                            },
                          }),
                        ],
                        1
                      )
                    : t._e(),
                ],
                2
              )
            : t._e();
        },
        r = [];
    },
    e741: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("75c5"),
        o = n("f514");
      for (var r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(r);
      n("02b1");
      var a = n("f0c5"),
        u = Object(a["a"])(
          o["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "7323bf5d",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = u.exports;
    },
    f514: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("d67e"),
        o = n.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = o.a;
    },
  },
]);
