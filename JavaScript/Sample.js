try{
    if(context.currentTags && context.currentTags.tags && context.currentTags.tags.includes("FileAClaim")) {
        context.fromClaimsFlow = true;
        koreDebugger.log('CURRENTTAG::'+ context.fromClaimsFlow)
    }else{
        if(context.currentTags && context.currentTags.tags){
            context.fromClaimsFlow = false;
            context.websiteCheck = false;
            koreDebugger.log('fromClaimsFlow::'+ context.fromClaimsFlow)
            koreDebugger.log('websiteCheck::'+ context.websiteCheck)
        if(!context.session.BotUserSession.RegisterIntentCount){
            context.session.BotUserSession.RegisterIntentCount = 0;
            context.session.BotUserSession.RegisterIntentCount++
        }else{
            context.session.BotUserSession.RegisterIntentCount++
            if(context.session.BotUserSession.RegisterIntentCount > 1){
                context.websiteCheck = true;
            }
        }
    }
    }
    
}catch(err){
    koreDebugger.log("failed at " + context.currentNodeName + ". Error is " + err.message);
    context.scriptFailed = true;
}