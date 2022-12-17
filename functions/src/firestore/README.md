# Firestore README
## Schema & System Data Rule

- All system data written here (for every version) 
    - IS NOT ALLOWED TO BE DELETED or MODIFIED
    - Create new Version instead!
- Schema Version 1 is DEFAULT
- Records of which defined here are DEFAULT
- All schema CAN NOT BE DEFINED in firestore directly. IT SHOULD BE WRITTEN here, to keep its historical data
- This schema written here will be run periodically (about once a day), to keep the data align with data
    - No Schema modification is allowed outside this codes
    - Therefore the periodic update will be applied
    - Any changes from outside this code, will be overriden by periodic update