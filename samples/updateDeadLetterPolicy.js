// Copyright 2020-2023 Google LLC
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

// This is a generated sample, using the typeless sample bot. Please
// look for the source TypeScript sample (.ts) for modifications.
'use strict';

/**
 * This application demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Update Dead Letter Policy
//   description: Update Dead Letter Policy in subscription.
//   usage: node updateDeadLetterPolicy.js <topic-name-or-id> <subscription-name-or-id>

// [START pubsub_dead_letter_update_subscription]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function updateDeadLetterPolicy(topicNameOrId, subscriptionNameOrId) {
  const metadata = {
    deadLetterPolicy: {
      deadLetterTopic: pubSubClient.topic(topicNameOrId).name,
      maxDeliveryAttempts: 15,
    },
  };

  await pubSubClient
    .topic(topicNameOrId)
    .subscription(subscriptionNameOrId)
    .setMetadata(metadata);

  console.log('Max delivery attempts updated successfully.');
}
// [END pubsub_dead_letter_update_subscription]

function main(
  topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID',
  subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID',
) {
  updateDeadLetterPolicy(topicNameOrId, subscriptionNameOrId).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));
