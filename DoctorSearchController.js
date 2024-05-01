({
    handleSpecializationChange : function(component, event, helper) {
        var specialization = event.getSource().get("v.value");
        component.set("v.specialization", specialization);
    },

    handleLocationChange : function(component, event, helper) {
        var location = event.getSource().get("v.value");
        component.set("v.location", location);
    },

    searchDoctors : function(component, event, helper) {
        var specialization = component.get("v.specialization");
        var location = component.get("v.location");
        
        var action = component.get("c.findDoctors");
        action.setParams({
            "specialization": specialization,
            "location": location
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.searchResults", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})
