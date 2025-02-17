function LoadNotificationsAdliyaPlugin() {
}

LoadNotificationsAdliyaPlugin.prototype.load = function (core) {
    core.registerEvent("AfterAuth", async () => {
        return new Promise(async (resolve, reject) => {
        const total = (await $api.get('v1/announcements-adliya/notifications')).data.data.total;

        if(total > 0) {
            core.$root.navigateTo('/pages/notifications_adliya?_target=modal_70')
        }

        resolve();

        });
    });
};

function LoadNotificationsPlugin() {
}

LoadNotificationsPlugin.prototype.load = function (core) {
    core.registerEvent("AfterAuth", async () => {
        return new Promise(async (resolve, reject) => {
        const total = (await $api.get('v1/announcements')).data.data.total;

        if(total > 0) {
            core.$root.navigateTo('/pages/notifications?_target=modal_70')
        }

        resolve();

        });
    });
};


function LoadQuestionnairePlugin() {

}

LoadQuestionnairePlugin.prototype.load = function (core) {
  core.registerEvent("AfterAuth", async () => {
    return new Promise(async (resolve, reject) => {
      const data = (await $api.get('v1/questionnaire_v2/check')).data.data;
      const showModal = data.body
      if(data.edit_id > 0 && showModal){
        await core.$root.navigateTo(`/forms/questionnaire_v2/${data.edit_id}?_target=modal_70`)
        await new Promise((resolve) => {
            core.$root.$onEvent('hy_questionnaire2::done', resolve);
          })}else if(showModal) {
            await core.$root.navigateTo('/forms/questionnaire_v2?_target=modal_70')
            await new Promise((resolve) => {
              core.$root.$onEvent('hy_questionnaire2::done', resolve);
            })
          }


      const total = (await $api.get('v1/announcements')).data.data.total;

      if(total > 0) {
        core.$root.navigateTo('/pages/notifications?_target=modal_70')
      }
      
      resolve();
    });
  });
};

function LoadQuestionnairePlugin1() {

}

LoadQuestionnairePlugin1.prototype.load = function (core) {
  core.registerEvent("AfterAuth", async () => {
    return new Promise(async (resolve, reject) => {
      const showModal = (await $api.get('v1/questionnaire_v3/check')).data.data;

      if(showModal) {
        await core.$root.navigateTo('/forms/questionnaire_v3?_target=modal_70')

        await new Promise((resolve) => {
          core.$root.$onEvent('hy_questionnaire2::done', resolve);
        })
      }

      const total = (await $api.get('v1/announcements')).data.data.total;

      if(total > 0) {
        core.$root.navigateTo('/pages/notifications?_target=modal_70')
      }
      
      resolve();
    });
  });
};

function LoadCourseQuestionnairePlugin() {

}

LoadCourseQuestionnairePlugin.prototype.load = function (core) {
    core.registerEvent("AfterAuth", async () => {
        return new Promise(async (resolve, reject) => {
            const showModal = (await $api.get('v1/check/courses-questions')).data.data;

            if(showModal) {
                await core.$root.navigateTo('/forms/courses_questions?_target=modal_70')
    
                core.$root.$onEvent('courses_questions::done', resolve);
            } else {
                resolve();
            }


        });
    });
};


function LoadCommunicationQuestionnairePlugin() {

}

LoadCommunicationQuestionnairePlugin.prototype.load = function (core) {
    core.registerEvent("AfterAuth", async () => {
        return new Promise(async (resolve, reject) => {
            const showModal = (await $api.get('v1/check/communication-questions')).data.data;

            if(showModal) {
                await core.$root.navigateTo('/forms/communication_questions?_target=modal_70')
    
                core.$root.$onEvent('communication_questions::done', resolve);
            } else {
                resolve();
            }


        });
    });
};


function LoadQuestionnaire3Plugin() {

}

LoadQuestionnaire3Plugin.prototype.load = function (core) {
    core.registerEvent("AfterAuth", async () => {
        return new Promise(async (resolve, reject) => {
            const showModal = (await $api.get('v1/check/hy-questionnaire3')).data.data;

            if(showModal) {
                await core.$root.navigateTo('/forms/hy_questionnaire3?_target=modal_70')
    
                core.$root.$onEvent('hy_questionnaire3::done', resolve);
            } else {
                resolve();
            }


        });
    });
};

function LoadQuestionnaire4Plugin() {

}

LoadQuestionnaire4Plugin.prototype.load = function (core) {
    core.registerEvent("AfterAuth", async () => {
        return new Promise(async (resolve, reject) => {
            const showModal = (await $api.get('v1/check/hy-questionnaire_v4')).data.data;

            if(showModal) {
                await core.$root.navigateTo('/forms/hy_questionnaire_v4?_target=modal_70')
    
                core.$root.$onEvent('hy_questionnaire3::done', resolve);
            } else {
                resolve();
            }
        });
    });
};




PlatonPluginCore.preloadPlugins([
LoadNotificationsPlugin, 
//LoadQuestionnairePlugin1, 
//LoadCourseQuestionnairePlugin, 
//LoadCommunicationQuestionnairePlugin,
//LoadQuestionnaire3Plugin,
LoadNotificationsAdliyaPlugin,
// LoadQuestionnaire4Plugin
]);