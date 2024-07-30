
import { EnvService } from '@app/infra/env';
import { Injectable } from '@nestjs/common';
import { 
    SpeechTranslationConfig, 
    PropertyId, 
    AudioStreamFormat, 
    AudioConfig, 
    TranslationRecognizer,
    AudioInputStream
} from 'microsoft-cognitiveservices-speech-sdk';

@Injectable()
export class SpeechService {
    constructor(
        private envService: EnvService
    ) { }

    getInstance()  {
        const SPEECH_AZURE_KEY = this.envService.get("SPEECH_AZURE_KEY");
        const AZURE_REGION = this.envService.get("AZURE_REGION");

        const client = SpeechTranslationConfig.fromSubscription(SPEECH_AZURE_KEY,AZURE_REGION)

        const TARGET_LANGUAGE = 'es-US'; // US Spanish
        const TARGET_TTS_LANGUAGE = 'es-US-PalomaNeural'; // US Spanish female
        client.speechRecognitionLanguage = 'en-US'; // US English
        client.addTargetLanguage(TARGET_LANGUAGE);

        client.setProperty(
            PropertyId.SpeechServiceConnection_TranslationVoice,
            TARGET_TTS_LANGUAGE
          );


        return client
    }

    getRecognizer(){
        const speech = this.getInstance()
        const audioFormat = AudioStreamFormat.getWaveFormatPCM(
            16000,
            16,
            1
          );
          const audioStream =
            AudioInputStream.createPushStream(audioFormat);
          const audioConfig = AudioConfig.fromStreamInput(audioStream);
    
          const recognizer = new TranslationRecognizer(
            speech,
            audioConfig
          );
          return recognizer
    }
}
