import * as campaignsTypes from './campaignBuilderTypes';
import { makePost } from '../../Services/Api';

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
                    ...state.currentCampaign,
                    ...action.data
                }
            }
        case campaignsTypes.CAMPAIGN_SENDING:
            console.log(state);
            let currCampaign = state.currentCampaign;
                console.log();

                makePost('api/campaigns',JSON.stringify({
                    campaign: {
                        age_range: currCampaign.ageRange,
                        compensation: currCampaign.compensation,
                        creator_responsibilities: currCampaign.creatorResponsibilities,
                        description: currCampaign.description,
                        desired_engagement_rate: parseInt(currCampaign.engagementRate, 10),
                        start_date: new Date(currCampaign.startDate).toISOString().substring(0,10),
                        end_date: new Date(currCampaign.endDate).toISOString().substring(0,10),
                        industry: currCampaign.industry,
                        interests: currCampaign.interests,
                        is_draft: currCampaign.isDraft,
                        location: currCampaign.location,
                        name: currCampaign.name,
                        perks: currCampaign.perks,
                        photo_reference: currCampaign.photoRef,
                        specific_to_location: currCampaign.local,
                        values: currCampaign.values,
                        launched_by: action.data.account.uuid
                    }
                }) ).then(response => response.json())
                .then(data => {
                    console.log(data);
                });
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