import * as campaignTypes from './campaignBuilderTypes';
import axios from 'axios';

export const sendCampaignData = campaignData => ({
    type: campaignTypes.CAMPAIGN_SENDING,
    data: campaignData
})

export const addCampaignData = (dataKey, data) => ({
    type: campaignTypes.CAMPAIGN_ADD_DATA,
    data: {
        [dataKey]: data 
    }
});

const campaignSending = () => ({
    type: campaignTypes.CAMPAIGN_SENDING,
});

const campaignSentSuccess = res => ({
    type: campaignTypes.CAMPAIGN_SENT_SUCCESS,
    data: res // Don't know if the result is useful, gonna store it for now. Might not be needed
});

const campaignSentError = err => ({
    type: campaignTypes.CAMPAIGN_SENT_ERROR,
    data: err
});
