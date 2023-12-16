/**
 * @name DiscordExperiments
 * @author VincentX0905(炸蝦)
 * @description Open Discord Experiments function | 啟用 Discord 實驗功能
 * @version 1.5.0
 * @authorId 1183208834802667555
 * @donate https://donate.fsbot.xyz
 * @invite myZ7u8pPe9
 * @website https://github.com/Friedshrimp-Studio-TW/Discord-Experiments/
 * @source https://github.com/Friedshrimp-Studio-TW/Discord-Experiments/
 * @updateUrl https://raw.githubusercontent.com/Friedshrimp-Studio-TW/Discord-Experiments/plugins/DiscordExperiments.plugin.js
 */

module.exports = class discordExperiments {
  start() {
    BdApi.showToast("Now you use DiscordExperiments V1.5.0 | 你現在使用 DiscordExperiments V1.5.0", {type:"info",icon: true,timeout: 7500,forceShow: true});
    try {
      let c; webpackChunkdiscord_app.push([[Symbol()],{},r=>c=r.c]); webpackChunkdiscord_app.pop();
      let u = Object.values(c).find(x=>x?.exports?.default?.getUsers).exports.default;
      let m = Object.values(u._dispatcher._actionHandlers._dependencyGraph.nodes);
      u.getCurrentUser().flags |= 1;
      m.find((x)=>x.name === "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]();
      try {m.find((x)=>x.name === "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user:{flags: 1}})} catch {};
      m.find((x)=>x.name === "ExperimentStore").storeDidChange();
    } catch (err) {
      console.log(err);
      BdApi.showNotice(
        "DiscordExperiments 插件錯誤 | DiscordExperiments Plugin error",
        {
          type: "error",
          buttons: [
            {
              label: "回報 | Report",
              onClick: () => window.open("https://github.com/vincentwang0905/DiscordExperiments/issues", "mozillaTab")
            }
          ]
        }
      );
      return BdApi.showNotice(
        `錯誤 | Error: ${err}`,
        {
          type: "error",
          buttons: [
            {
              label: "回報 | Report",
              onClick: () => window.open("https://github.com/vincentwang0905/DiscordExperiments/issues", "mozillaTab")
            }
          ]
        }
      );
    }
  }

  stop() {
    BdApi.showNotice("你需要重啟 BD 來關閉 DiscordExperiments | You need to reboot BD for disabling DiscordExperiments", {
      type: "warning",
      buttons: [{
        label: "重啟 BD | Reboot BD",
        onClick: () => location.reload()
      }]
    });
  }
}
