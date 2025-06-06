// Copyright 2019-2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * This application demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Create BigQuery Subscription
//   description: Creates a new BigQuery subscription.
//   usage: node createBigQuerySubscription.js <topic-name-or-id> <subscription-name-or-id> <bigquery-table-id>

// [START pubsub_create_bigquery_subscription]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';
// const bigqueryTableId = 'YOUR_TABLE_ID';

// Imports the Google Cloud client library
import {PubSub, CreateSubscriptionOptions} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createBigQuerySubscription(
  topicNameOrId: string,
  subscriptionNameOrId: string,
  bigqueryTableId: string,
) {
  const options: CreateSubscriptionOptions = {
    bigqueryConfig: {
      table: bigqueryTableId,
      writeMetadata: true,
    },
  };

  await pubSubClient
    .topic(topicNameOrId)
    .createSubscription(subscriptionNameOrId, options);

  console.log(`Subscription ${subscriptionNameOrId} created.`);
}
// [END pubsub_create_bigquery_subscription]

function main(
  topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID',
  subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID',
  bigqueryTableId = 'YOUR_TABLE_ID',
) {
  createBigQuerySubscription(
    topicNameOrId,
    subscriptionNameOrId,
    bigqueryTableId,
  ).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));
