
function OnBoard(data) {
    let journey = {};
    journey.id = data.id;
    journey.showPrevButton = true,
    journey.steps = [];
    data.steps.forEach((step) => {
        journey.steps.push({
            title: step.title,
            content: step.content,
            target: document.querySelector(step.target),
            placement: step.placement,
            showSkip : data.showSkip || false
        })
    });
    return journey;
}