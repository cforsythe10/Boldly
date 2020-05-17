import * as campaignsTypes from './campaignBuilderTypes';

const initialState = {
    campaigns: [],
    currentCampaign: {
        name: '',
        description: '',
        values: 'Community,Diversity,Education',
        startDate: '',
        endDate: '',
        creatorResponsibilities: '',
        compensation: '',
        perks: '',
        industry: '',
        followerCount: '',
        engagementRate: '',
        interests: '',
        ageRange: '',
        location: '',
        local: false,
        photoRef: '',
        isDraft: false,
    },
    currentCampaignRes: {
        sending: false,
        err: false,
        res: null
    }
}

const campaignBuilder = (state = initialState, action) => {
    switch(action.type) {
        case campaignsTypes.CAMPAIGN_ADD_DATA:
            return {
                ...state,
                currentCampaign: {
                    ...action.data
                }
            }
        case campaignsTypes.CAMPAIGN_SENDING:
            

            return {
                ...state,
                currentCampaignRes : {
                    sending: true
                }
            }
        case campaignsTypes.CAMPAIGN_SENT_SUCCESS:
            return {
                ...state,
                currentCampaignRes: {
                    sending: false,
                    res: action.data
                }
            }
        case campaignsTypes.CAMPAIGN_SENT_ERROR:
            return {
                ...state,
                currentCampaignRes : {
                    sending: false,
                    err: action.data
                }
            }
        default:
            return state;
    }
}

export default campaignBuilder;