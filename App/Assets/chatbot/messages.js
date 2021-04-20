const messages = [
    {
      _id: 1,
      text: 'This is a system message',
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      system: true,
    },
    {
      _id: 2,
      text: 'Welcome to Group4 PTSD Chatbot',
      createdAt: new Date(Date.UTC(2016, 5, 12, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
    },
    {
      _id: 3,
      text: 'I am a personal therapy chatbot designed to help you: <ul> <li>understand PTSD symptoms</li><li>develop solutions for your concern, and</li><li>assist you to make positive and lasting changes in your life',
      createdAt: new Date(Date.UTC(2016, 5, 13, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'React Native',
      },
      image: 'https://placeimg.com/960/540/any',
    },
    {
      _id: 4,
      text: 'I will help you understand PTSD symptoms, develop solutions for your concern, and assist you to make positive and lasting changes in your life',
      createdAt: new Date(Date.UTC(2016, 5, 13, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'React Native',
      },
      image: 'https://placeimg.com/960/540/any',
    },
    {
      _id: 5,
      text: 'Are you ready to start to recovery journey with me?',
      createdAt: new Date(Date.UTC(2016, 5, 13, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: '😋 Yes',
            value: 'yes',
            messageId: 13,
            
          },
          {
            title: '😞 Nope. What?',
            value: 'no',
            
          },
        ],
      },
      image: 'https://placeimg.com/960/540/any',
    },
    {
      _id: 6,
      text: 'I will ask you a couple of questions. <br /> Your answer will help me to better understand you.',
      createdAt: new Date(Date.UTC(2016, 5, 13, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'React Native',
      },
      image: 'https://placeimg.com/960/540/any',
    },
    {
      _id: 7,
      text: 'Starting Assessment',
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      system: true,
    },
    {
      _id: 8,
      text: '1. Do you have repeated, disturbing memories, thoughts, or images of a stressful experience from the past?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 9,


          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 9,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 9,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 9,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 9,
          },
        ],
      },
    },{
      _id: 9,
      text: '2. Do you have repeated, disturbing dreams of a stressful experience from the past?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 10,

          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 10,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 10,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 10,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 10,
          },
        ],
      },
    },
    {
      _id: 10,
      text: '3. Are you suddenly acting or feeling as if a stressful experience were happening again?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 11,

          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 11,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 11,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 11,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 11,
          },
        ],
      },
    },
    {
      _id: 11,
      text: '4. Do you feel very upset when something reminded you of a stressful experience from the past?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 12,

          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 12,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 12,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 12,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 12,
          },
        ],
      },
    },
    {
      _id: 12,
      text: '5. Do you avoid thinking about or talking about a stressful experience from the past or avoid having feelings related to it?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 13,

          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 13,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 13,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 13,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 13,
          },
        ],
      },
    },
    {
      _id: 13,
      text: '6. Do you avoid activities or situations because they remind you of a stressful experience from the past?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 14,

          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 14,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 14,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 14,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 14,
          },
        ],
      },
    },
    {
      _id: 14,
      text: '7. Do you have trouble remembering important parts of a stressful experience from the past?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 15,

          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 15,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 15,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 15,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 15,
          },
        ],
      },
    },
    {
      _id: 15,
      text: '8. Do you lose interest in things that you used to enjoy?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 16,

          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 16,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 16,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 16,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 16,
          },
        ],
      },
    },
    {
      _id: 16,
      text: '9. Do you feel distant or cut off from other people?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 17,

          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 17,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 17,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 17,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 17,
          },
        ],
      },
    },
    {
      _id: 17,
      text: '10. Do you feel emotionally numb or being unable to have loving feelings for those close to you?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 18,

          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 18,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 18,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 18,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 18,
          },
        ],
      },
    },
    {
      _id: 18,
      text: '11. Do you feel as if your future will somehow be cut short?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 19,

          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 19,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 19,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 19,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 19,
          },
        ],
      },
    },
    {
      _id: 19,
      text: '12. Do you have trouble falling or staying asleep?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 20,

          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 20,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 20,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 20,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 20,
          },
        ],
      },
    },
    {
      _id: 20,
      text: '13. Do you feel irritable or having angry outbursts?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 21,

          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 21,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 21,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 21,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 21,
          },
        ],
      },
    },
    {
      _id: 21,
      text: '14. Do you have difficulty concentrating?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 22,

          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 22,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 22,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 22,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 22,
          },
        ],
      },
    },
    {
      _id: 22,
      text: '"15. Are you \'super alert\' or watchful on guard?"',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: 'Not at all',
            value: 'Not at all',
            messageId: 23,

          },
          {
            title: 'A little bit',
            value: 'A little bit',
             messageId: 23,

          },
          {
            title: 'Moderately',
            value: 'Moderately',
             messageId: 23,
          },
          {
            title: 'Quite a bit',
            value: 'Quite a bit',
             messageId: 23,
          },
          {
            title: 'Extremely',
            value: 'Extremely',
             messageId: 23,
          },
        ],
      },
    },

    
  ];
  
  export default messages;