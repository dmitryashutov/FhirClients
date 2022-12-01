export var SupportedAnswerType;
(function (SupportedAnswerType) {
    SupportedAnswerType["STRING"] = "STRING";
    SupportedAnswerType["DECIMAL"] = "DECIMAL";
    SupportedAnswerType["DATE"] = "DATE";
    SupportedAnswerType["ATTACHMENT"] = "ATTACHMENT";
    SupportedAnswerType["CODING"] = "CODING";
})(SupportedAnswerType || (SupportedAnswerType = {}));
export const getValueForType = (answer, typeString) => {
    const type = SupportedAnswerType[typeString];
    switch (type) {
        case SupportedAnswerType.ATTACHMENT:
            return answer.valueAttachment?.data;
        case SupportedAnswerType.DECIMAL:
            return answer.valueDecimal;
        case SupportedAnswerType.DATE:
            return answer.valueDate;
        case SupportedAnswerType.STRING:
            return answer.valueString;
        case SupportedAnswerType.CODING:
            return answer.valueCoding;
        default:
            throw new Error('programming error, forgot to add new SupportedAnswerType');
    }
};
const getFieldNameForType = (type, answer) => {
    const key = `value${type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}`;
    return key;
};
export const getAnswerType = (answer) => {
    for (const type in SupportedAnswerType) {
        const fieldName = getFieldNameForType(type, answer);
        if (fieldName && answer[fieldName]) {
            return type;
        }
    }
    throw new Error(`answer set, but using unsupported value, supported values are: [${Object.values(SupportedAnswerType).join(', ')}]`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydGVkLWFuc3dlci10eXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9tb2RlbHMvc3VwcG9ydGVkLWFuc3dlci10eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBTixJQUFZLG1CQU1YO0FBTkQsV0FBWSxtQkFBbUI7SUFDN0Isd0NBQWlCLENBQUE7SUFDakIsMENBQW1CLENBQUE7SUFDbkIsb0NBQWEsQ0FBQTtJQUNiLGdEQUF5QixDQUFBO0lBQ3pCLHdDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFOVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBTTlCO0FBSUQsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLENBQUMsTUFBdUMsRUFDdkMsVUFBNEMsRUFBd0IsRUFBRTtJQUNwRyxNQUFNLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssbUJBQW1CLENBQUMsVUFBVTtZQUNqQyxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDO1FBQ3RDLEtBQUssbUJBQW1CLENBQUMsT0FBTztZQUM5QixPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDN0IsS0FBSyxtQkFBbUIsQ0FBQyxJQUFJO1lBQzNCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUMxQixLQUFLLG1CQUFtQixDQUFDLE1BQU07WUFDN0IsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQzVCLEtBQUssbUJBQW1CLENBQUMsTUFBTTtZQUM3QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDNUI7WUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7S0FDL0U7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLG1CQUFtQixHQUFHLENBQUMsSUFBWSxFQUFFLE1BQXVDLEVBQXlDLEVBQUU7SUFDM0gsTUFBTSxHQUFHLEdBQUcsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztJQUVqRixPQUFPLEdBQTRDLENBQUM7QUFDdEQsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBdUMsRUFBb0MsRUFBRTtJQUN6RyxLQUFLLE1BQU0sSUFBSSxJQUFJLG1CQUFtQixFQUFFO1FBQ3RDLE1BQU0sU0FBUyxHQUFHLG1CQUFtQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbEMsT0FBTyxJQUF3QyxDQUFDO1NBQ2pEO0tBQ0Y7SUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLG1FQUFtRSxNQUFNLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2SSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvZGluZywgUXVlc3Rpb25uYWlyZVJlc3BvbnNlSXRlbUFuc3dlcn0gZnJvbSAnZmhpci9yNCc7XG5cbmV4cG9ydCBlbnVtIFN1cHBvcnRlZEFuc3dlclR5cGUge1xuICBTVFJJTkcgPSAnU1RSSU5HJyxcbiAgREVDSU1BTCA9ICdERUNJTUFMJyxcbiAgREFURSA9ICdEQVRFJyxcbiAgQVRUQUNITUVOVCA9ICdBVFRBQ0hNRU5UJyxcbiAgQ09ESU5HID0gJ0NPRElORycsXG59XG5cbnR5cGUgU3VwcG9ydGVkQW5zd2VyVmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCBDb2RpbmcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZvclR5cGUgPSAoYW5zd2VyOiBRdWVzdGlvbm5haXJlUmVzcG9uc2VJdGVtQW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlU3RyaW5nOiBrZXlvZiB0eXBlb2YgU3VwcG9ydGVkQW5zd2VyVHlwZSk6IFN1cHBvcnRlZEFuc3dlclZhbHVlID0+IHtcbiAgY29uc3QgdHlwZSA9IFN1cHBvcnRlZEFuc3dlclR5cGVbdHlwZVN0cmluZ107XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU3VwcG9ydGVkQW5zd2VyVHlwZS5BVFRBQ0hNRU5UOlxuICAgICAgcmV0dXJuIGFuc3dlci52YWx1ZUF0dGFjaG1lbnQ/LmRhdGE7XG4gICAgY2FzZSBTdXBwb3J0ZWRBbnN3ZXJUeXBlLkRFQ0lNQUw6XG4gICAgICByZXR1cm4gYW5zd2VyLnZhbHVlRGVjaW1hbDtcbiAgICBjYXNlIFN1cHBvcnRlZEFuc3dlclR5cGUuREFURTpcbiAgICAgIHJldHVybiBhbnN3ZXIudmFsdWVEYXRlO1xuICAgIGNhc2UgU3VwcG9ydGVkQW5zd2VyVHlwZS5TVFJJTkc6XG4gICAgICByZXR1cm4gYW5zd2VyLnZhbHVlU3RyaW5nO1xuICAgIGNhc2UgU3VwcG9ydGVkQW5zd2VyVHlwZS5DT0RJTkc6XG4gICAgICByZXR1cm4gYW5zd2VyLnZhbHVlQ29kaW5nO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2dyYW1taW5nIGVycm9yLCBmb3Jnb3QgdG8gYWRkIG5ldyBTdXBwb3J0ZWRBbnN3ZXJUeXBlJyk7XG4gIH1cbn07XG5cbmNvbnN0IGdldEZpZWxkTmFtZUZvclR5cGUgPSAodHlwZTogc3RyaW5nLCBhbnN3ZXI6IFF1ZXN0aW9ubmFpcmVSZXNwb25zZUl0ZW1BbnN3ZXIpOiBrZXlvZiBRdWVzdGlvbm5haXJlUmVzcG9uc2VJdGVtQW5zd2VyID0+IHtcbiAgY29uc3Qga2V5ID0gYHZhbHVlJHt0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpfWA7XG5cbiAgcmV0dXJuIGtleSBhcyBrZXlvZiBRdWVzdGlvbm5haXJlUmVzcG9uc2VJdGVtQW5zd2VyO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFuc3dlclR5cGUgPSAoYW5zd2VyOiBRdWVzdGlvbm5haXJlUmVzcG9uc2VJdGVtQW5zd2VyKToga2V5b2YgdHlwZW9mIFN1cHBvcnRlZEFuc3dlclR5cGUgPT4ge1xuICBmb3IgKGNvbnN0IHR5cGUgaW4gU3VwcG9ydGVkQW5zd2VyVHlwZSkge1xuICAgIGNvbnN0IGZpZWxkTmFtZSA9IGdldEZpZWxkTmFtZUZvclR5cGUodHlwZSwgYW5zd2VyKTtcbiAgICBpZiAoZmllbGROYW1lICYmIGFuc3dlcltmaWVsZE5hbWVdKSB7XG4gICAgICByZXR1cm4gdHlwZSBhcyBrZXlvZiB0eXBlb2YgU3VwcG9ydGVkQW5zd2VyVHlwZTtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoYGFuc3dlciBzZXQsIGJ1dCB1c2luZyB1bnN1cHBvcnRlZCB2YWx1ZSwgc3VwcG9ydGVkIHZhbHVlcyBhcmU6IFske09iamVjdC52YWx1ZXMoU3VwcG9ydGVkQW5zd2VyVHlwZSkuam9pbignLCAnKX1dYCk7XG59O1xuIl19