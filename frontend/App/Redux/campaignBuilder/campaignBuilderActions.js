import * as campaignTypes from './campaignBuilderTypes';
import axios from 'axios';

export const sendCampaignData = (account) => ({
    type: campaignTypes.CAMPAIGN_SENDING,
    data: {account: account}
})

export const addCampaignData = (dataKey, data) => ({
    type: campaignTypes.CAMPAIGN_ADD_DATA,
    data: {
        [dataKey]: data 
    }
});

export const getCampaigns = (account) => ({
    type: campaignTypes.GET_CAMPAIGNS,
    data: account
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
